import { Injectable } from '@angular/core';


import { Job } from './job';

@Injectable()
export class JobService {
  constructor() { }

  getAll() : Job[] {
    return[]
  }
}
