import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  distance : number = 0

  OnDistanceChange(value: string) {
    this.distance = parseInt(value)
  }
}
