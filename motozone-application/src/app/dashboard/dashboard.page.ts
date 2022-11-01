import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  dirt(){
    this.router.navigate(['dirt']);
  }
  sport(){
    this.router.navigate(['sport']);
  }
  scooter(){
    this.router.navigate(['scooter']);
  }

  cruiser(){
    this.router.navigate(['cruiser']);
  }



}
