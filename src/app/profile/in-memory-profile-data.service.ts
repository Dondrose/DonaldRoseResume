import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryProfileDataService implements InMemoryDbService {
  createDb() {
    const profile = [
    {
      id: 0,
      firstName: "Donald",
      middleName: "DeAngelo",
      lastName: "Rose",
      summary: "Day Job: Progressive Web and Mobile App developer with 12 years of experience of building for the internet. Possesses a strong coding foundation in object oriented programming and highly knowledgeable of data structures and algorithms. Adaptive to different web technologies and concepts (Current passions: MVC, Docker, Angular, Typescript & GoLang) to deliver an innovative website. Motivated by the process of creation and delivering a final project that exceeds expectations. Alter Ego: Technology and programming instructor with a passion of making tech literacy a realization within under represented communities.",
      mobilePhone: "(773)-941-3370",
      homePhone: "(404)-344-4775",
      address: "Not Listed",
      city: "Atlanta",
      state: "GA",
      zip: "30349",
      email: "dondrose@gmail.com",
      emailAtl: "donaldrose@roselution.com",
      linkedIn: "https://www.linkedin.com/in/donalddrose/",
      github: "https://github.com/Dondrose/",
      bitbucket: "https://bitbucket.org/Roselution/donaldroseresume"
    }
    ];
    return {profile};
  }
}