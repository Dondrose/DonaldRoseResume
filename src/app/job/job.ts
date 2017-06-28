export class Job {
    
    public companyName: string;
    public cityName: string;
    public state: string;
    public title: string;
    public startMonth: string;
    public startYear: string;
    public endMonth: string;
    public endYear: string;
    public location: string;
    public jobStart: string;
    public jobEnd: string;
    public description: string;
    public accomplishments:string[];
    
    constructor( ) {
        this.companyName;
        this.cityName;
        this.state;
        this.title;
        this.location = this.cityName + " " + this.state;;
        this.jobStart = this.startMonth + " " + this.startYear;
        this.jobEnd =  this.endMonth + " " + this.endYear;
        this.description;
        this.accomplishments;
    }
}

