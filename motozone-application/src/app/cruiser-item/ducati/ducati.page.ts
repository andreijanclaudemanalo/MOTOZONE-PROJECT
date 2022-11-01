import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ducati',
  templateUrl: './ducati.page.html',
  styleUrls: ['./ducati.page.scss'],
})
export class DucatiPage implements OnInit {

  public du: any= [
    {id: 1, name: 'Multistrada V4', Frame: "trellis", Wheels: "Pirelli Diablo Supercorsa", Weight: '231 Kg', Size: '870 mm', cat: 'du'},
    {id: 2,name:'Scrambler', Frame: "trellis", Wheels: "Pirelli Diablo Supercorsa", Weight: '234kg', Size: '860 mm', cat: 'du'},
    {id: 3,name:'Panigale V4', Frame: "trellis", Wheels: "Pirelli Diablo Supercorsa", Weight: '384 lbs (174 kg)', Size: '850 mm (33.5 in)', cat: 'du'}

     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['cruiser']);
  }
}