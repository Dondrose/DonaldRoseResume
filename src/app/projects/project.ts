export class Project {
    public imgURL: string;
    public linkURL: string;
    public title: string;
    public type: string;
    public description: string;
    public technologies: Technologies[];

    constructor() {
        this.imgURL = void 0;
        this.linkURL = void 0;
        this.title = void 0;
        this.type = void 0;
        this.description = void 0;
        this.technologies = void 0;
    }
}

export class Technologies {
    public name: string;

    constructor() {
        this.name = void 0;
    }
}

export class ProjectSection {
    public title: string;
    public projects: Project[];
    
    constructor() {
        this.title = void 0;
        this.projects = void 0;
    }
}

export class Portfolio {
    public projectSection: ProjectSection[];

    constructor() {
        this.projectSection = void 0;
    }
}
