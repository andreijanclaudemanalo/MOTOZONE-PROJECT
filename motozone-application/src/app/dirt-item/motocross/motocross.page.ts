import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-motocross',
  templateUrl: './motocross.page.html',
  styleUrls: ['./motocross.page.scss'],
})
export class MotocrossPage implements OnInit {

  public mt: any= [
    {id: 1, name: 'MXGP', Frame: "Aluminum", Wheels: "12 max wheel size", Weight: '92kg', Size: '35.2 inches', cat: 'moto'},
    {id: 2,name:'MX2', Frame: "Chinese Aluminum", Wheels: "11 max wheel size", Weight: '92kg', Size: '35.1inches', cat: 'moto'},
    {id: 3,name:'MXW Women', Frame: "carbon fiber", Wheels: "10 max wheel size", Weight: '89kg', Size: '33.1inches', cat: 'moto'}

     
]
constructor( private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['dirt']);
  }
}
