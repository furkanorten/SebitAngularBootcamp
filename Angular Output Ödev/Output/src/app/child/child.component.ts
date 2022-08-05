import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() AlertEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  Alert():void {
    this.AlertEvent.emit()
  }

}
