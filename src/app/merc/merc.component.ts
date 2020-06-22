import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merc',
  templateUrl: './merc.component.html',
  styleUrls: ['./merc.component.css']
})
export class MercComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors:Colors;
  options:string[];

  constructor() { }

  ngOnInit () {
    this.name = "BMW";
    this.speed = 200;
    this.model = "X6";
    this.colors = {
        car: "black",
        salon: "Red",
        wheels: "white"
    }
    this.options = ["ABS","Automat","Climate Control"]
}

}
interface Colors {
car:string,
salon: string,
wheels:string
}