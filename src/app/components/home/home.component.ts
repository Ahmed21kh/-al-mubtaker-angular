import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 @ViewChild('scroll') scroll:ElementRef;
  constructor() { }

  ngOnInit(): void {
    AOS.init();

  }

  scroToTop(){
    console.log('scroll');

  this.scroll.nativeElement.scroToTop = 1;
  }
}
