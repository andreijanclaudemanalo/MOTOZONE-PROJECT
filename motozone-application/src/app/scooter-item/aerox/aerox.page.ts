import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';


@Component({
  selector: 'app-aerox',
  templateUrl: './aerox.page.html',
  styleUrls: ['./aerox.page.scss'],
})
export class AeroxPage implements OnInit {

  public ae: any= [
    {id: 1, name: 'Aerox 155', Frame: "Tubular steel", Wheels: "OKM Mag", Weight: '280 pounds', Size: '35 inches', cat: 'ae'},
    
    {id: 3,name:'Aerox R', Frame: "Tubular steel", Wheels: "Sport Rim", Weight: '274lbs', Size: '33 inches', cat: 'ae'}

     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['scooter']);
  }
}