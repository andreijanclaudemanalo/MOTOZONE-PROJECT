import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-scooter',
  templateUrl: './scooter.page.html',
  styleUrls: ['./scooter.page.scss'],
})
export class ScooterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['dashboard']);
  }

  mio(){
    this.router.navigate(['mio']);
  }
  nmax(){
    this.router.navigate(['nmax']);
  }
  pcx(){
    this.router.navigate(['pcx']);
  }
  aerox(){
    this.router.navigate(['aerox']);
  }
}

