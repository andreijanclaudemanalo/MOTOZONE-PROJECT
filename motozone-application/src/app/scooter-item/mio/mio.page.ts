import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-mio',
  templateUrl: './mio.page.html',
  styleUrls: ['./mio.page.scss'],
})
export class MioPage implements OnInit {

  public mi: any= [
    {id: 1, name: 'Mio i 125 BB38', Frame: "Underbone", Wheels: "70/90-14 M/C 34P Tube Type", Weight: '92kg', Size: '750mm', cat: 'mi'},
    {id: 2,name:'Mio Soul i 125', Frame: "Underbone", Wheels: "80/90-14 M/C 40P Tube Type", Weight: '96kg', Size: '755mm', cat: 'mi'}
    
     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['scooter']);
  }
}