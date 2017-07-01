export interface Resume {
    _id: number,
    type: any,
    section: ResumeSectionObject[],
    candidate: ResumeObject[],
    experience: ResumeObject[],
    abilities: ResumeObject[],
    projects: ResumeObject[],
    other: ResumeObject[]
}

export interface ResumeObject {
    _id: number,
    type: any,
    data: object[]
}

export interface ResumeSectionObject {
    _id: number,
    title: string,
    quote: string
}