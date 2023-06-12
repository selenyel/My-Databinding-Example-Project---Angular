import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent:string}>();


  @ViewChild('serverContentInput') serverContentInput: ElementRef; // converting 2 way binding to fetching local references with ViewChild
  // @ViewChild(CockpitComponent) contentInput;

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement ) {
    console.log(nameInput);
    console.log(nameInput.value);
    console.log(this.serverContentInput);
    // ^ We understand that this is an ElementRef property
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: contentInput.value
      // serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement , /* contentInput: HTMLInputElement */) { // converted 2 way binding to passing local references from html to ts
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      // blueprintContent: contentInput.value
      blueprintContent:  this.serverContentInput.nativeElement.value
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called!', changes)
  }
}


// Local references passed to methods or local references fetched through View Child
// But dont assign value to the this.serverContentInput.nativeElement.value it would work but don't mess with the DOM like this.
// There are better tools and methods for that.