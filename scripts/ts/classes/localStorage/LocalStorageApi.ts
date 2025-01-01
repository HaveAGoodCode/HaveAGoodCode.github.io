export class StorageType {
    private readonly name: string;

    private constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public static MUSIC_TIME = new StorageType("music_time");
    public static MESSAGE_COUNT = new StorageType("message_count");
    public static THEME = new StorageType("theme");
}

export default class LocalStorageApi {
    private static readonly LOCAL_STORAGE: Storage = window.localStorage;

    public static write<T>(type: StorageType, data: T): void {
        try {
            const serializedData = JSON.stringify(data ?? {});
            LocalStorageApi.LOCAL_STORAGE.setItem(type.getName(), serializedData);
        } catch (e) {
            console.error("Failed to write to localStorage:", e);
        }
    }

    public static read<T>(type: StorageType): T | null {
        try {
            const item = LocalStorageApi.LOCAL_STORAGE.getItem(type.getName());
            return item ? JSON.parse(item) as T : null;
        } catch (e) {
            console.error("Failed to read from localStorage:", e);
            return null;
        }
    }

    public static remove(type: StorageType): void {
        try {
            LocalStorageApi.LOCAL_STORAGE.removeItem(type.getName());
        } catch (e) {
            console.error("Failed to remove from localStorage:", e);
        }
    }

    public static isClean(): boolean {
        try {
            return (LocalStorageApi.LOCAL_STORAGE.length === 0);
        } catch (e) {
            console.error("Failed to check localStorage:", e);
            return false;
        }
    }
}