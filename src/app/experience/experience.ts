import {deserialize } from 'json-typescript-mapper';
export class Accomplishments{
    public details: string;
}


export class Experience {
    
    public companyName: string;
    public locationCity: string;
    public locationState: string;
    public startDate: string;
    public endDate: string;
    public description: string;
    public title: string;
    //public accomplishments: Accomplishments[];

    constructor() {
        this.companyName = void 0;
        this.locationCity = void 0;
        this.locationState = void 0;
        this.startDate = void 0;
        this.endDate = void 0;
        this.description = void 0;
        this.title = void 0;
        //this.accomplishments;
    }
}