export class Jobs {
    constructor(
        private id: number,
        public name: string,
        public title: string,
        public location: string[],
        public job_start: string[],
        public job_end: string[],
        public description: string,
        public accomplishments:string[]) {
    }
}

