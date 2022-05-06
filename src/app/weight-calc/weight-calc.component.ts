import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight-calc',
  templateUrl: './weight-calc.component.html',
  styleUrls: ['./weight-calc.component.css']
})

export class WeightCalcComponent implements OnInit {
  // let idealWeight:number = 0; 
  // let weight: number ;
  idealWeight: number = NaN;

  // weight = (document.getElementById('weight')) as HTMLInputElement | null;
  weight: number = 0
  height: number = 0
  gender: string = ''

  ngOnInit() {
    // console.log('help')
  }

  getValue(val: any) {
    console.warn(val)
  }

  // 👉️ calculate your ideal weight
  calculateWeight() {
    this.weight = parseFloat((<HTMLInputElement>document.getElementById("weight")).value);
    this.height = parseFloat((<HTMLInputElement>document.getElementById("height")).value);
    this.gender = (<HTMLSelectElement>document.getElementById('gender')).value;
    console.log('weight ->', this.weight + 'height ->', this.height + 'gender ->', this.gender)

    this.idealWeight = (this.gender === 'male') ? (this.height - 100) * 0.9 : (this.height - 100) * 0.8
  }
}
