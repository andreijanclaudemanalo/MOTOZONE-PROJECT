import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cruiser',
  templateUrl: './cruiser.page.html',
  styleUrls: ['./cruiser.page.scss'],
})
export class CruiserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['dashboard']);
  }

  harley(){
    this.router.navigate(['harley']);
  }
  ducati(){
    this.router.navigate(['ducati']);
  }
  motorstar(){
    this.router.navigate(['motorstar']);
  }
  vulcan(){
    this.router.navigate(['vulcan']);
  }
}