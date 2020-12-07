import { Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-the-content',
  templateUrl: './the-content.component.html',
  styleUrls: ['./the-content.component.scss']
})
export class TheContentComponent implements OnInit {
  @Input() postObj: object;

  constructor() { }



  ngOnInit(): void {

  }

}
