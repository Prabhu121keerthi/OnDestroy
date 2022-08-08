import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'OnDestroy';

  displayChild = true;

  constructor() {
    console.log("AppComponent:constructed");
  }

  ngOnInit() {
    console.log("AppComponent:ngOnInit");
  }

  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }
}
