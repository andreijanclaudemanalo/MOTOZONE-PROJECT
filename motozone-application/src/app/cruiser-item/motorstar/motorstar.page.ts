import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-motorstar',
  templateUrl: './motorstar.page.html',
  styleUrls: ['./motorstar.page.scss'],
})
export class MotorstarPage implements OnInit {

  constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['cruiser']);
  }
}