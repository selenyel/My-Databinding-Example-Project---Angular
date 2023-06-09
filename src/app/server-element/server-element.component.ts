import { ViewEncapsulation } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
    // makes that only my component receives the style sheet properties that I defined for it
  // encapsulation: ViewEncapsulation.None
    // makes every css globally effective
  //encapsulation: ViewEncapsulation.ShadowDom
    // same as None but with ShadowDom which also only works with supported browsers
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: {
    type:string,
    name:string,
    content:string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
