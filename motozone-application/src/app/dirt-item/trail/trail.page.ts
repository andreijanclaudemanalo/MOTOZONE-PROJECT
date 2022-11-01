import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trail',
  templateUrl: './trail.page.html',
  styleUrls: ['./trail.page.scss'],
})
export class TrailPage implements OnInit {

  public tr: any= [
    {id: 1, name: 'MINI TRAIL DIRT 40 CC', Frame: " Twin spare heavy steel", Wheels: "Sapphire Tire", Weight: '104.4kg', Size: '36.8 inches', cat: 'tr'},
    {id: 2,name:'KTM 250SXF', Frame: "Twin Spar", Wheels: "E717 Sapphire", Weight: '234.1lbs', Size: '35.4inches', cat: 'tr'},
    {id: 3,name:'CRF250F', Frame: "carbon fiber", Wheels: "Dura Tire", Weight: '102.4kg/2281lb', Size: '34.8inches', cat: 'tr'}

     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['dirt']);
  }
}
