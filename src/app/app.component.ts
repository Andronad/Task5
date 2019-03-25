import { Component } from '@angular/core';
import {Sample1Service} from "./services/sample1.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTesting';
  myClass="redInterpolation"
  items=[1,2,3,4];
  constructor(private sample1: Sample1Service){
    this.title=sample1.getTitle();
  }
  clickHappened($event: MouseEvent){
    console.log($event);

  }
}
