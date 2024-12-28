import Drama, { DramaType } from "../drama/Dramas.js";
import Left from "../left/Left.js";
import { processMessage } from "../message/Message.js";
import MessageID from "../message/MessageID.js";

interface MenuItem {
    name: string;
    action?: () => void;
    children?: MenuItem[];
}

export default class DirectoryManager {
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

    private static processMenuItems(menuItems: MenuItem[]): void {
        menuItems.forEach((item: MenuItem) => {
            if (item.action) {
                const func = new Function('MessageID', 'Drama', 'DramaType', 'Left', 'processMessage', item.action as unknown as string);
                item.action = () => func(MessageID, Drama, DramaType, Left, processMessage);
            }

            if (item.children) {
                DirectoryManager.processMenuItems(item.children);
            }
        });
    }

    public static initializeDirectory(): void {
        const directoryList = document.getElementById('directory-list') as HTMLElement;

        fetch('./menu.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const items = JSON.parse(JSON.stringify(data.menuItems));
                DirectoryManager.processMenuItems(items);
                DirectoryManager.createDirectory(items, directoryList);
            })
            .catch(error => {
                console.error('Failed to load JSON:', error);
            });
    }
}