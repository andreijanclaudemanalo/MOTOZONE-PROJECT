import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.scss'],
})
export class ChildPage implements OnInit {

  public ch: any= [
    {id: 1, name: '49cc Small Dirt', Frame: "Chromoly steel trellis", Wheels: "Wire-spoke w/ D.I.D DirtStar rims", Weight: '150 pounds', Size: '6 inches', cat: 'ch'},
    {id: 2,name:'McConors Original', Frame: "carbon fiber", Wheels: "21 front/18 rear", Weight: '134.1lbs', Size: '7inches', cat: 'ch'},
    {id: 3,name:'49cc Orion', Frame: "carbon fiber", Wheels: "21 front/18 rear", Weight: '161lbs', Size: '8inches', cat: 'ch'}

     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['dirt']);
  }
}