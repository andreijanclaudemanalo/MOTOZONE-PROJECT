import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dirt',
  templateUrl: './dirt.page.html',
  styleUrls: ['./dirt.page.scss'],
})
export class DirtPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['dashboard']);
  }

  enduro(){
    this.router.navigate(['enduro']);
  }
  trail(){
    this.router.navigate(['trail']);
  }
  motocross(){
    this.router.navigate(['motocross']);
  }
  child(){
    this.router.navigate(['child']);
  }
}
