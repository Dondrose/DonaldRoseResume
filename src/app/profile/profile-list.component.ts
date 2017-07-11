import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Profile } from './profile';
import { ProfileService } from './profile.service';

export class ProfileListComponent implements OnInit {
    profile: Observable<Profile[]>;

    private profileID: number;

    constructor(
        private service: ProfileService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        
    }
}