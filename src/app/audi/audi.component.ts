import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.css']
})
export class AudiComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors:Colors;
  options:string[];

  constructor() { }

  ngOnInit () {
    this.name = "Audi";
    this.speed = 240;
    this.model = "A6";
    this.colors = {
        car: "White",
        salon: "Black",
        wheels: "Silver"
    }
    this.options = ["ABS","Climate Control"]
}

}
interface Colors {
  car:string,
  salon: string,
  wheels:string
}
