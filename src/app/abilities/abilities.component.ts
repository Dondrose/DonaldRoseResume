import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AbilitiesService} from './abilities.service';
import { Abilities} from './abilities';
import { Http } from '@angular/http';
import {MdSliderModule, MdProgressBarModule} from '@angular/material';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css'],
  providers: [AbilitiesService]
})
export class AbilitiesComponent implements OnInit {

  public errMes: String;
  private abilities;

  constructor(private abilitiesService: AbilitiesService) { }

  getAbilities() {
    return this.abilitiesService.getAbilitiesData()
      .subscribe(
        (data) => {
          this.abilities = data
          console.log(data)
        }/*,
        (err) => {
          this.errMes = err
        }*/
      );
  }

  ngOnInit(): void {
    this.getAbilities();
  }

}
