import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-light',
  templateUrl: './light.page.html',
  styleUrls: ['./light.page.scss'],
})
export class LightPage implements OnInit {

  public sp: any= [
    {id: 1, name: 'BMW G310GS', Wheels: "Alloy Wheels", Weight: '169.5kg', Size: '35.8 inches', cat: 'sp'},
    {id: 2,name:'Honda CB125R',  Wheels: "Alloy Wheels", Weight: '126kg', Size: '37.4inches', cat: 'sp'},
    {id: 3,name:'Norton Superlight 650',  Wheels: "Alloy Wheels", Weight: '158kg', Size: '36.6inches', cat: 'sp'}

     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['sport']);
  }
}