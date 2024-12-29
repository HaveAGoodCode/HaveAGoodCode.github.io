import LocalStorageApi, { StorageType } from "./classes/localStorage/LocalStorageApi.js";
import MessageID from "./classes/message/MessageID.js";
import Hello from "./Hello.js";

(function () {
    if (Hello.f5Show || LocalStorageApi.isClean()) {
        const html: string = `
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
        </div>`;
        (document.getElementById('base') as HTMLElement).insertAdjacentHTML('afterbegin', html);
        (document.getElementById("closeIntro") as HTMLElement).onclick = () => {
            (document.getElementById('introBackground') as HTMLElement).remove();

            let tour: { addStep: (arg0: { element: string; title: string; content?: string; reflex?: boolean; }) => void; init: () => void; start: () => void; };
            if (Hello.f5Show) {
                tour = new Tour({
                    storage: false,
                    backdrop: true
                });
            } else {
                tour = new Tour({
                    backdrop: true
                });
            }
    
            tour.addStep({
                element: "#left",
                title: "說明區域",
                content: "用於跟你傳遞訊息，點一下他繼續！",
                reflex: true
            });
    
            tour.addStep({
                element: "label[for='sideMenu-active']",
                title: "目錄的開關",
                content: "點他一下打開目錄！",
                reflex: true
            });
    
            // tour.addStep({
            //     element: "div.sideMenu nav#directory-list li:first-of-type",
            //     title: "目錄的項目",
            //     content: "點他一下跳轉到章節！",
            //     reflex: true
            // });
    
            tour.init();
            tour.start();
        };
        MessageID.id = 0;
        LocalStorageApi.write<number>(StorageType.MESSAGE_COUNT, MessageID.id);
    } else {
        MessageID.id = (LocalStorageApi.read<number>(StorageType.MESSAGE_COUNT) as number);
    }
})();