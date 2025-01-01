export default class ButtonChange {
    private static readonly buttons: HTMLButtonElement[] = [];
    private static readonly darkChange: Map<HTMLButtonElement, () => void> = new Map();

    public static registerButton(button: HTMLButtonElement, darkChange?: () => void, clickChange?: () => void): void {
        ButtonChange.buttons.push(button);

        if (clickChange !== undefined) {
            button.addEventListener('click', clickChange);
        }

        if (darkChange !== undefined) {
            ButtonChange.darkChange.set(button, darkChange);
        }
    }

    public static changeButtonTheme(isDark: boolean): void {
        ButtonChange.buttons.forEach((button) => {
            const darkChange: ((() => void) | undefined) = ButtonChange.darkChange.get(button);

            if (darkChange !== undefined) {
                darkChange();
            } else {
                const newCta = isDark ? "fa-solid" : "fa-regular";
                const icon = button.firstChild as HTMLElement;
                const oldCta = icon.classList[0];
                icon.classList.replace(oldCta, newCta);
            }
        });
    }
}