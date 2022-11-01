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

  down(){
    this.router.navigate(['downhill']);
  }
  cross(){
    this.router.navigate(['cross']);
  }
  enduro(){
    this.router.navigate(['enduro']);
  }
  fat(){
    this.router.navigate(['fatbike']);
  }
}
