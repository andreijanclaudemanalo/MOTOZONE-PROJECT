import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vulcan',
  templateUrl: './vulcan.page.html',
  styleUrls: ['./vulcan.page.scss'],
})
export class VulcanPage implements OnInit {

  constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['cruiser']);
  }
}
