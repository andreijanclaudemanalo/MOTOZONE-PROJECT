import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-harley',
  templateUrl: './harley.page.html',
  styleUrls: ['./harley.page.scss'],
})
export class HarleyPage implements OnInit {

  public mt: any= [
    {id: 1, name: 'FXDR 114', Frame: "Mild steel w/ cast aluminum swingarm", Wheels: "Cast aluminum", Weight: '413 pounds', Size: '28.5 inches', cat: 'ha'},
    {id: 2,name:'FAT BOY 114', Frame: "Shovelhead", Wheels: "Lakester cast aluminum", Weight: '234kg', Size: '675 mm', cat: 'ha'},
    {id: 3,name:'Heritage Classic 114', Frame: "carbon fiber", Wheels: "Lakester cast aluminum", Weight: '250kg', Size: '26.3 inches', cat: 'ha'}

     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['cruiser']);
  }
}