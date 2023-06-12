import { ViewEncapsulation } from '@angular/compiler';
import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

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
export class ServerElementComponent implements OnInit, OnChanges {

  @Input('srvElement') element: {
    type:string,
    name:string,
    content:string
  };
  @Input()name:string;
  @Input()index:number;

  @ViewChild('heading',{static:true}) header: ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;

  constructor() { 
    console.log('Constructor Called!')
  }

  // Life cycle of the HOOKS 
  ngOnInit(): void {
    console.log('ngOnInit Called!')
    console.log(this.header.nativeElement.textContent, '< This is where I was NOT hoping to see this')
    console.log(this.paragraph.nativeElement.textContent, '< This is where I was NOT hoping to see this')
  }
  // Once the component has been initialized
  // Before added to the DOM nor displayed yet
  // But our properties can be accessed and initialized
  // Would runs AFTER the constructor

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called!', changes)
  }
  // When component is 
  // 1) When it first
  // 2) When it Bound input property changes
  //    Such as @Input() @Output()
  //    Whenever these changes ngOnChanges also changes

  ngDoCheck(): void{
    console.log('ngDoCheck Called!');
  }
  // This will run whenever Change detection runs
  // Also whenever you click a button
  // Or write 2 to the input field
  // Timer fired
  // An observable was resolved

  ngAfterContentInit(): void{
    console.log('ngAfterContentInit Called!');
    console.log(this.paragraph.nativeElement.textContent, '< This is where I WAS hoping to see this')
  }
  // Whenever a content which is projected via ng-content (the one we wrote between the (<>this stuff</>) selector brackets has been initialized)

  ngAfterContentChecked(): void{
    console.log('ngAfterContentChecked Called!');
  }
  // Same as checked but for the ng-content

  ngAfterViewInit(): void{    
    console.log('ngAfterViewInit Called!');
    console.log(this.header.nativeElement.textContent, '< This is where I WAS hoping to see this')
  }
  // Once the view of our own component has been finished initializing,
  // Once it is rendered

  ngAfterViewChecked(): void{
    console.log('ngAfterViewChecked Called!');
  }
  // Whenever our view has been checked

  ngOnDestroy(): void{
    console.log('ngOnDestroy Called!');
  }
  // Called once the component is about to be destroyed
  // Like there is a component in the DOM because of a *ngIf
}
