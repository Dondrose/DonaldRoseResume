import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HeaderService } from './header.service';
import { Header } from './header';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
  
  public errorMes: String;
  private header;

  constructor(private headerService: HeaderService) { }


  getHeader() {
    return this.headerService.getHeaderData()
    .subscribe(
      response => this.header = response,
      error => this.errorMes = <any>error
    );
  }

  ngOnInit(): void{
    this.getHeader();
  }
} 