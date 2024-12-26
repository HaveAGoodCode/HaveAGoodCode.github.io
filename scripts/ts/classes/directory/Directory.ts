import MessageID from "../message/MessageID.js";
import { processMessage } from "../message/Message.js";
import Left from "../left/Left.js";
import Drama, { DramaType } from "../drama/Dramas.js";

interface MenuItem {
    name: string;
    action?: () => void;
    children?: MenuItem[];
}

export default class DirectoryManager {
    private static menuItems: MenuItem[] = [
        {
            name: 'boolean', action: () => {
                MessageID.id = Drama.findMessageID(DramaType.Ball, "true為真，false為假");
                Left.clear();
                processMessage();
            }
        },
        {
            name: '運算符', children: [
                {
                    name: '關係運算符', action: () => {
                        MessageID.id = Drama.findMessageID(DramaType.Ball, "==用來判斷是否相等");
                        Left.clear();
                        processMessage();
                    }, children: [{
                        name: '大小', action: () => {
                            MessageID.id = Drama.findMessageID(DramaType.Ball, "電腦連大於、小於、大於或等於、小於或等於");
                            Left.clear();
                            processMessage();
                        }
                    }]
                },
                {
                    name: '算術運算符', action: () => {
                        MessageID.id = Drama.findMessageID(DramaType.Ball, "電腦的加減乘除，基本上跟數學一樣");
                        Left.clear();
                        processMessage();
                    }
                },
                {
                    name: 'boolean運算符', action: () => {
                        MessageID.id = Drama.findMessageID(DramaType.Ball, "! 是用來反轉 boolean 值的");
                        Left.clear();
                        processMessage();
                    }
                },
                {
                    name: '位元運算符', action: () => {
                        throw new Error("undefined");
                    }
                }
            ],
        },
        {
            name: '其他類型', action: () => {
                MessageID.id = Drama.findMessageID(DramaType.Ball, "不只有boolean，還有其他的資料長相");
                Left.clear();
                processMessage();
            }
        }, {
            name: 'final', action: () => {
                MessageID.id = Drama.findMessageID(DramaType.Ball, "相信你一定有想過");
                Left.clear();
                processMessage();
            }
        },
        {
            name: 'class', action: () => {
                MessageID.id = Drama.findMessageID(DramaType.Ball, "class 就像生物分類裡的「屬」");
                Left.clear();
                processMessage();
            }, children: [{
                name: 'package', action: () => {
                    MessageID.id = Drama.findMessageID(DramaType.Ball, "class在檔案當中儲存為.java文件");
                    Left.clear();
                    processMessage();
                }
            }, {
                name: 'extends', action: () => {
                    MessageID.id = Drama.findMessageID(DramaType.Ball, "一個class可以繼承 (在某class的下屬)");
                    Left.clear();
                    processMessage();
                }
            },
            {
                name: 'static、this、super', action: () => {
                    MessageID.id = Drama.findMessageID(DramaType.Ball, "Class內可以儲存方法或者變量");
                    Left.clear();
                    processMessage();
                }
            }, {
                name: '構造函數', action: () => {
                    MessageID.id = Drama.findMessageID(DramaType.Ball, "構造函數用於創建一個class的實例");
                    Left.clear();
                    processMessage();
                }
            },]
        },
        {
            name: 'method', action: () => {
                MessageID.id = Drama.findMessageID(DramaType.Ball, "方法（method）就是程式中用來解決重複問題的工具");
                Left.clear();
                processMessage();
            }, children: [{
                name: 'return', action: () => {
                    MessageID.id = 404; // 方法就像是事先寫好的方程式，我們只需要給它數字
                    Left.clear();
                    processMessage();
                }
            }, {
                name: 'abstract', action: () => {
                    MessageID.id = Drama.findMessageID(DramaType.Ball, "對於子類可以重寫父類邏輯");
                    Left.clear();
                    processMessage();
                }
            },]
        },
        {
            name: '權限', action: () => {
                MessageID.id = Drama.findMessageID(DramaType.Ball, "在程式語言中，「權限」就像是一個管理誰能做什麼事情的規則。");
                Left.clear();
                processMessage();
            }, children: [{
                name: 'default', action: () => {
                    MessageID.id = Drama.findMessageID(DramaType.Ball, "default（預設權限）：");
                    Left.clear();
                    processMessage();
                }
            }, {
                name: 'public', action: () => {
                    MessageID.id = Drama.findMessageID(DramaType.Ball, "public（公共權限）：");
                    Left.clear();
                    processMessage();
                }
            }, {
                name: 'private', action: () => {
                    MessageID.id = Drama.findMessageID(DramaType.Ball, "private（私有權限）：");
                    Left.clear();
                    processMessage();
                }
            }, {
                name: 'protected', action: () => {
                    MessageID.id = Drama.findMessageID(DramaType.Ball, "protected（保護權限）：");
                    Left.clear();
                    processMessage();
                }
            }]
        }
    ];

    private static createDirectory(items: MenuItem[], parentElement: HTMLElement): void {
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.name;

            li.addEventListener('click', event => {
                event.stopPropagation();
                if (item.action) {
                    item.action();
                }
            });

            parentElement.appendChild(li);

            if (item.children) {
                const ul = document.createElement('ul');
                ul.style.marginLeft = '1%';
                parentElement.appendChild(ul);
                DirectoryManager.createDirectory(item.children, ul);
            }
        });
    }

    public static initializeDirectory(): void {
        const directoryList = document.getElementById('directory-list') as HTMLElement;
        DirectoryManager.createDirectory(DirectoryManager.menuItems, directoryList);
    }
}