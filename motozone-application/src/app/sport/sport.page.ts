import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})
export class SportPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['dashboard']);
  }

  light(){
    this.router.navigate(['light']);
  }
  middle(){
    this.router.navigate(['middle']);
  }
  super(){
    this.router.navigate(['super']);
  }

}
