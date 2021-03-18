export class Settings {
    private _columns: Array<{ id: string, name: string, isActive?: boolean }>;
    private _sortParams: string[];
    private _sortDirs: string[];
    private _key: string;

    constructor(key: string) {
        this._key = key;
        this._columns = [];
        this._sortParams = [];
        this._sortDirs = [];
    }

    public load() {
        const value = JSON.parse(localStorage.getItem(this._key));
        if (value) {
            this._columns = value._columns || [];
            this._sortDirs = value._sortDirs || [];
            this._sortParams = value._sortParams || [];
        }
    }

    public save(): void {
        const settingsString = JSON.stringify(this);
        localStorage.setItem(this._key, settingsString);
    }

    public get columns(): Array<{ id: string, name: string, isActive?: boolean }> {
        return this._columns;
    }

    public get sortParams(): string[] {
        return this._sortParams;
    }

    public get sortDirs(): string[] {
        return this._sortDirs;
    }

    public get key(): String {
        return this._key;
    }

    public set columns(columns: Array<{ id: string, name: string, isActive?: boolean }>) {
        this._columns = columns;
    }

    public set sortParams(sortParams: string[]) {
        this._sortParams = sortParams;
    }

    public set sortDirs(sortDirs: string[]) {
        this._sortDirs = sortDirs;
    }
}
