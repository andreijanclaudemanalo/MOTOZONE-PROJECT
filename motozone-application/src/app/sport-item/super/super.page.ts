import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super',
  templateUrl: './super.page.html',
  styleUrls: ['./super.page.scss'],
})
export class SuperPage implements OnInit {

  public sr: any= [
    {id: 1, name: 'Ducati Palingale V4', Frame: "Trellis", Wheels: "Magnesium Rims", Weight: '176kg', Size: '40.8 inches', cat: 'sr'},
    {id: 2,name:'Aprilia RSV4', Frame: "Carbon Fiber", Wheels: "Malgatech", Weight: '174kg', Size: '41.4inches', cat: 'sr'},
    {id: 3,name:'BMW S1000RR', Frame: "Aluminum Rear", Wheels: "Rapid TEK", Weight: '170kg', Size: '39.6inches', cat: 'sr'}

     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['sport']);
  }
}