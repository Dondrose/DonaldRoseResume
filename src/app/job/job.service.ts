import { Injectable } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'


import { Job } from './job';

@Injectable()
export class JobService {
  constructor() { }

  getAll() : Job[] {
    return[]
  }
}
