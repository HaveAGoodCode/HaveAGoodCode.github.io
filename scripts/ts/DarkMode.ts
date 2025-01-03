import ButtonChange from "./ButtonChange.js";
import LocalStorageApi, { StorageType } from "./classes/localStorage/LocalStorageApi.js";

export enum Theme {
    Dark = "dark",
    Light = "light"
}

export default class DarkMode {
    public static readonly button: HTMLButtonElement = (document.querySelector("[data-theme-toggle]") as HTMLButtonElement);
    public static currentThemeSetting: Theme;

    public static init(): void {
        DarkMode.initTheme();
        DarkMode.update();

        DarkMode.button.addEventListener("click", () => {
            DarkMode.toggleTheme();
            DarkMode.update();
        });

        ButtonChange.registerButton(DarkMode.button);
    }

    private static initTheme(): void {
        const localStorageTheme: Theme | null = LocalStorageApi.read<Theme>(StorageType.THEME);
        const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
        
        if (localStorageTheme === null) {
            DarkMode.currentThemeSetting = systemSettingDark.matches ? Theme.Dark : Theme.Light;
        } else {
            DarkMode.currentThemeSetting = localStorageTheme;
        }
    }

    private static toggleTheme(): void {
        DarkMode.currentThemeSetting = DarkMode.currentThemeSetting === Theme.Dark ? Theme.Light : Theme.Dark;
        LocalStorageApi.write<Theme>(StorageType.THEME, DarkMode.currentThemeSetting);
    }

    private static update(): void {
        ButtonChange.changeButtonTheme(DarkMode.currentThemeSetting === Theme.Dark);
        DarkMode.updateThemeOnHtmlEl(DarkMode.currentThemeSetting);
    }

    public static updateThemeOnHtmlEl(theme: Theme): void {
        (document.querySelector("html") as HTMLElement).setAttribute("data-theme", theme.toString());
    }
}