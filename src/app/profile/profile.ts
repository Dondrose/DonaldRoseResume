import { ResumeObject } from '../shared/resume-object';

export interface Profile extends ResumeObject {
    firstName: string;
    middleName: string;
    lastName: string;
    mobilePhone: string;
    homePhone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    linkedin: string;
    github: string;
    bitbucket: string;
    summary: string;
}