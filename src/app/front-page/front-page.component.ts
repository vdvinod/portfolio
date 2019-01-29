import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  @Input() scrollId: string;
  @Output() scroll = new EventEmitter<string>();
  @Output() sMusic = new EventEmitter<string>();
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100 ;
  showPlayButton = true;
  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0
  };
  this.myParams = {
    particles: {
          number: {
              value: 80,
          },
          color: {
              value: '#000000'
          },
          shape: {
              type: 'triangle',
          },
          size : {
            value: 2
          },
          move : {
            enable : true,
            speed : 1
          }
    }
  };
  }
  stopMusic (event) {
    event.stopPropagation();
    this.showPlayButton = false;
    this.sMusic.next();
  }
  scrollToElement(): void {
    this.scroll.next(this.scrollId);
  }
}
