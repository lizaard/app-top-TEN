import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-the-content',
  templateUrl: './the-content.component.html',
  styleUrls: ['./the-content.component.scss']
})
export class TheContentComponent implements OnInit {
  @Input() DeacuSperSaMearga1
  @Output() ceva = new EventEmitter

  constructor() { }



  ngOnInit(): void {
    this.ceva.emit(this.DeacuSperSaMearga1)
  }

}
