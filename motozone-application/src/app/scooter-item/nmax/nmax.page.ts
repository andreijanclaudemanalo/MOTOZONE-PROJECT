import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nmax',
  templateUrl: './nmax.page.html',
  styleUrls: ['./nmax.page.scss'],
})
export class NmaxPage implements OnInit {

  public nm: any= [
    {id: 1, name: 'NMAX 155', Frame: "Tubular steel ", Wheels: "xspeed mags spin", Weight: '303 lbs', Size: '39 inches', cat: 'nm'}
     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['scooter']);
  }
}