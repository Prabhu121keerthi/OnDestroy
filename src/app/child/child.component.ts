import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log("ChildComponent:constructed");
  }

  ngOnInit() {
    console.log("ChildComponent:ngOnInit");
  }
  ngOnDestroy() {
    console.log("ChildComponent:ngOnDestroy");
  }

}
