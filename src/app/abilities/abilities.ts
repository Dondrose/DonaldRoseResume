export class AbilitiesList {
    public name: string;
    public proficiency: number;
    public icon: string;
    constructor() {
        this.icon = void 0;
        this.name = void 0;
        this.proficiency = void 0;
    }
}

export class AbilitiesSection {
    public title: string;
    constructor() {
        this.title = void 0;
    }
}

export class Abilities {
    public section: AbilitiesSection[];
    public list: AbilitiesList[];
    constructor() {
        this.section = void 0;
        this.list = void 0;
    }
}