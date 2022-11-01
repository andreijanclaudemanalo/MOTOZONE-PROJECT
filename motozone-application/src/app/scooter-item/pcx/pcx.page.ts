import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pcx',
  templateUrl: './pcx.page.html',
  styleUrls: ['./pcx.page.scss'],
})
export class PcxPage implements OnInit {

  public pc: any= [
    {id: 1, name: 'HONDA PXC 125', Frame: " duplex steel", Wheels: "Corsa Cross", Weight: '301 pounds', Size: '35.8 inches', cat: 'pc'},
    {id: 2,name:'HONDA PXC 150', Frame: " duplex steel", Wheels: " Genuine Rear", Weight: '310.3lbs', Size: '37.4inches', cat: 'pc'},
   

     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['scooter']);
  }
}