import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathCalcService {

  constructor() { }
  public getSum(a:number, b:number):number{
    return a+b;
  }
  public getDif(a:number, b:number):number{
    return a-b;
  }
  public getMult(a:number, b:number):number{
    return a*b;
  }
  public getDiv(a:number, b:number):number{
    return a/b;
  }

}
