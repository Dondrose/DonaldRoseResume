import {deserialize } from 'json-typescript-mapper';
export class Accomplishments{
    @JsonProperty('detail')
    accomplishments: Accomplishments;
}


export class Experience {
    @JsonProperty('companyName')
    public companyName: string;
    @JsonProperty('locationCity')
    public locationCity: string;
    @JsonProperty('locationState')
    public locationState: string;
    @JsonProperty('startDate')
    public startDate: string;
    @JsonProperty('endDate')
    public endDate: string;
    @JsonProperty('description')
    public description: string;
    @JsonProperty('title')
    public title: string;
    @JsonProperty({clazz: Accomplishments})
    public accomplishments: Accomplishments;

    constructor() {
        this.companyName = void 0;
        this.locationCity = void 0;
        this.locationState = void 0;
        this.startDate = void 0;
        this.endDate = void 0;
        this.description = void 0;
        this.title = void 0;
    }
}