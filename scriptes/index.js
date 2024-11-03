class BallAnimation {
    static objs = [document.getElementById('ball'), document.getElementById('shadow')];

    static remove(animationId) {
        BallAnimation.objs.forEach(obj => obj.classList.remove(animationId));
    }

    static add(animationId) {
        BallAnimation.objs.forEach(obj => obj.classList.add(animationId));
    }

    static jump() {
        BallAnimation.remove('roll');
        BallAnimation.add('jump');
    }

    static roll() {
        BallAnimation.add('roll');
        BallAnimation.remove('jump');
    }

    static normal() {
        BallAnimation.remove('roll');
        BallAnimation.remove('jump');
    }

    static jumpOnce() {
        BallAnimation.jump();
        setTimeout(() => BallAnimation.normal(), 800 + 10);
    }
}

function getHelloMsg() {
    var hour = new Date().getHours();
    if (hour >= 4 && hour < 12) {
        return "早安";
    } else if (hour >= 12 && hour < 18) {
        return "午安";
    } else {
        return "晚安";
    }
}

let chats = [];
let oChats = [];
let calls = [];

async function getDrama() {
    // Get the drama and split it into lines and random good sentences
    const [dramaRes, messageRes] = await Promise.all([
        fetch("https://raw.githubusercontent.com/HaveAGoodCode/HaveAGoodCode.github.io/refs/heads/main/dramas/drama.drama"),
        fetch("https://api.github.com/zen")
    ]);
    const [drama, message] = await Promise.all([dramaRes.text(), messageRes.text()]);
    const lines = drama.split('\n');

    var offset = 0;
    for (var index = 0; index < lines.length; index++) {
        var line = lines[index];
        if (line.startsWith('@Ball:')) {
            // Since the good message is random and will not change over time, the original message and message are directly replaced
            // The original message removes the beginning of '@ball:' and has a length of 6
            oChats[index - offset] = line.substring(6).replace('{goodMsg}', message);
            chats[index - offset] = oChats[index - offset];
        } else if (line.startsWith('@Function:')) {
            var method = BallAnimation[line.replace('@Function:', '')];
            if (typeof method === 'function') {
                calls[index] = method;
                // Prevent the message get from being undefined or null
                offset++;
            }
        }
    }
}

async function init() {
    await getDrama();
    click(true);
    eventHook();
}

function click(init) {
    // Update message if time change
    for (var index = 0; index < oChats.length; index++) {
        var chat = oChats[index];
        if (chat.includes('{time}')) {
            chats[index] = chat.replace('{time}', getHelloMsg());
        }
    }

    const textElement = document.getElementsByClassName('text')[0];

    if (!init) {
        // Id + 1, and keep it within range
        textElement.id = (parseInt(textElement.id, 10) + 1) % chats.length;
    }

    // Set text of the chat
    textElement.innerHTML = chats[parseInt(textElement.id, 10)];

    // Calc width (chinese char and chinese sige +2, english char and normal sige +1)
    let width = 0;
    for (let char of textElement.innerHTML) {
        width += /[\u4e00-\u9fa5\uff0c\u3002\u3001\u300c\u300d\uff1b\uff1a\uff08\uff09\uff1f\uff01\u3010\u3011\u300a\u300b\u2014\u2026\u2013\u2018\u201c\u201d\uff0e]/.test(char) ? 2 : 1;
    }
    textElement.style.width = width + 'ch';

    // Show the caret
    textElement.style.borderRightColor = 'rgb(0, 0, 0)';

    // Appear letter by letter, with a blinking caret
    textElement.style.animation = 'typing ' + (width / 10) + 's steps(' + textElement.innerHTML.length + '), caret 0.8s steps(1) infinite';

    setTimeout(() => {
        // Make the caret disappear after typing is complete
        textElement.style.animation = '';
        textElement.style.borderRightColor = 'transparent';
        // Called if id+1 is a method call (not null or undefined)
        var call = calls[parseInt(textElement.id, 10) + 1];
        if (call) {
            call();
        }
    }, ((width / 10) * 1000) + 500);
}

function eventHook() {
    document.getElementById('frame').addEventListener('click', () => click(false));
}