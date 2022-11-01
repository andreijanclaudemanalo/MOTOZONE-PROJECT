import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enduro',
  templateUrl: './enduro.page.html',
  styleUrls: ['./enduro.page.scss'],
})
export class EnduroPage implements OnInit {

  public en: any= [
    {id: 1, name: 'KTM 300 EXC TPI', Frame: "Chromoly steel trellis", Wheels: "Wire-spoke w/ D.I.D DirtStar rims", Weight: '350 pounds', Size: '35.8 inches', cat: 'end'},
    {id: 2,name:'HUSQVARNA TE 300I', Frame: "carbon fiber", Wheels: "21 front/18 rear", Weight: '106.2kg/234.1lb', Size: '37.4inches', cat: 'end'},
    {id: 3,name:'BETA RR 300', Frame: "carbon fiber", Wheels: "21 front/18 rear", Weight: '103.4kg/2281lb', Size: '36.6inches', cat: 'end'}

     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['dirt']);
  }
}
