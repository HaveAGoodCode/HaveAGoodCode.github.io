import LocalStorageApi,{StorageType}from"./classes/localStorage/LocalStorageApi.js";import MessageID from"./classes/message/MessageID.js";import Hello from"./Hello.js";Hello.f5Show||LocalStorageApi.isClean()?(document.getElementById("base").insertAdjacentHTML("afterbegin",`
        <div id="introBackground">
            <div id="centerBlock">
                <div id="title">
                    <h1 id="innerTitle">歡迎來到</h1>
                    <h1 id="innerTitle">HaveAGoodCode.github.io!</h1>
                </div>
                <div id="intro">
                    <p id="innerText">這是一個致力於提供程式學習者教學的網站。</p>
                    <p id="innerText">您可以在這裡體驗到學習且同時實作的教學模式。</p>
                    <p id="innerText">讓我們為您介紹一下。</p>
                </div>
                <button id="closeIntro">繼續</button>
            </div>
        </div>`),document.getElementById("closeIntro").onclick=()=>{document.getElementById("introBackground").remove();let e;(e=Hello.f5Show?new Tour({storage:!1,backdrop:!0}):new Tour({backdrop:!0})).addStep({element:"#left",title:"說明區域",content:"用於跟你傳遞訊息，點一下他繼續！",reflex:!0}),e.addStep({element:"label[for='sideMenu-active']",title:"目錄的開關",content:"點他一下打開目錄！",reflex:!0}),e.init(),e.start()},MessageID.id=0,LocalStorageApi.write(StorageType.MESSAGE_COUNT,MessageID.id)):MessageID.id=LocalStorageApi.read(StorageType.MESSAGE_COUNT);