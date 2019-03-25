import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Sample1Service {

  constructor() { }
  public getTitle(): string {
    return "Title from this service";
  }

}
