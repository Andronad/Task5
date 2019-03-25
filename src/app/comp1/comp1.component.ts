import { Component, OnInit } from '@angular/core';
import {MathCalcService} from "../services/math-calc.service";

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  sum=0;
  sub=0;
  mult=0;
  div=0;
  a=1;
  b=1;
  constructor(private serv: MathCalcService) {

  }

  ngOnInit() {
  }

}
