import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight-calc',
  templateUrl: './weight-calc.component.html',
  styleUrls: ['./weight-calc.component.css']
})
export class WeightCalcComponent implements OnInit {
  // let weight: number ;
  
  weight = (document.getElementById('weight')) as HTMLInputElement | null;
  // weight: number = 0
  // height: number = 0
  // gender: string = ''

  ngOnInit() {
    // console.log('help')
  }
 

  // const value = input?.value;
  // console.log(value) // 👉️ "Initial value"




  setvalue() {
    // mymodel = newValue;
    // this.weight = (<HTMLInputElement>document.getElementById("weight")).value;
    // this.height = 160
    // this.gender = 'female'

    // let idealWeight = 0.00
    // if (this.gender ==='female'){
    //   idealWeight = (this.height - 100) * 0.8
    //   console.log(idealWeight)

    // } else {
    //   idealWeight = (this.height - 100) * 0.9
    //   console.log(idealWeight)

    // }
  }
}
