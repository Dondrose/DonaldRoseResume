export interface Accomplishments<T> {
    deserialize(input: Object); T;
}

export class Experience {
        public companyName: string;
        public locationCity: string;
        public locationState: string;
        public startDate: string;
        public endDate: string;
        public description: string;
        public title: string;
       public IAccomplishments<string>: Accomplishments;
}