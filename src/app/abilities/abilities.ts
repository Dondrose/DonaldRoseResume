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

export class Abilities {
    public softwareKnowledge: AbilitiesList[];
    public technicalKnowledge: AbilitiesList[];
    public codingLanguage: AbilitiesList[];
    constructor() {
        this.codingLanguage = void 0;
        this.softwareKnowledge = void 0;
        this.technicalKnowledge = void 0;
    }
}