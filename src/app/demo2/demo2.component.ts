import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component  implements  OnInit {

      name:string;
      speed:number;
      model:string;
      colors:Colors;
      options:string[];
      openBl:boolean = false;

    constructor() {}

    ngOnInit(){
      this.name = "Audi";
      this.speed = 250;
      this.model = "RS8";
      this.colors ={
        car:"White",
        salon:"Black",
        wheels:"Silver"
      }
      this.options = [ 'ABS', 'SRS', 'Climate Control'];
    }

    openBlock(){
      this.openBl = !this.openBl
    }
  
    addOption(newOption){
      if(newOption == ""){
          alert("Enter New Options")
      }else{
        this.options.unshift(newOption)
      }
    }
    removeOption(delOption){
      for( let i = 0; i < this.options.length; i++){
        if(this.options[i] == delOption){
          this.options.splice(i, 1);
          break;
        }
      }
    }
    carSelect(carName){
      if (carName == "BMW") {
        this.name = "BMW";
        this.speed = 350;
        this.model = "M6";
        this.colors ={
          car:"Black",
          salon:"Danger",
          wheels:"Silver"
        }
          this.options = [ 'Climate Control','ABS' ];
        } else if (carName == "Merc") {
          this.name = "Mercedes";
          this.speed = 300;
          this.model = "cls";
          this.colors ={
            car:"Black",
            salon:"Red",
            wheels:"Black"
          }
          this.options = [ 'ABS', 'SRS', 'Climate Control',"Airbag","4 Matic" ];
        }else{
          this.ngOnInit()
        }
    }

}

interface Colors {
   car:string,
   salon:string,
   wheels:string
}