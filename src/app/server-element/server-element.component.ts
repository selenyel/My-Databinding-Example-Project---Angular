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

  // Life cycle of the HOOKS 
  ngOnInit(): void {}
  // Once the component has been initialized
  // Before added to the DOM nor displayed yet
  // But our properties can be accessed and initialized
  // Would runs AFTER the constructor

  ngOnChanges(): void {}
  // When component is 
  // 1) When it first
  // 2) When it Bound input property changes
  //    Such as @Input() @Output()
  //    Whenever these changes ngOnChanges also changes

  ngDoCheck(): void{}
  // This will run whenever Change detection runs
  // Also whenever you click a button
  // Or write 2 to the input field
  // Timer fired
  // An observable was resolved

  ngAfterContentInit(): void{}
  // Whenever a content which is projected via ng-content (the one we wrote between the (<>this stuff</>) selector brackets has been initialized)

  ngAfterContentChecked(): void{}
  // Same as checked but for the ng-content

  ngAfterViewInit(): void{}
  // Once the view of our own component has been finished initializing,
  // Once it is rendered

  ngAfterViewChecked(): void{}
  // Whenever our view has been checked

  ngOnDestroy(): void{}
  // Called once the component is about to be destroyed
  // Like there is a component in the DOM because of a *ngIf
}
