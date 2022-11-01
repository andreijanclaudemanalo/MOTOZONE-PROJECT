import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-middle',
  templateUrl: './middle.page.html',
  styleUrls: ['./middle.page.scss'],
})
export class MiddlePage implements OnInit {

  public md: any= [
    {id: 1, name: 'Honda CBR650R',  Wheels: "Diablo Rosso", Weight: '167kg', Size: '40 inches', cat: 'middle'},
    {id: 2,name:'KTM RC390', Wheels: "Sport Tubeless Tires", Weight: '171kg', Size: '41inches', cat: 'middle'},
    {id: 3,name:'Kawasaki Ninja ZX-6R',  Wheels: "Pirelli Sport Tires", Weight: '168kg', Size: '41.4inches', cat: 'middle'}

     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['sport']);
  }
}