import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sound = new Howl({
    src: ['src/assets/audio1.mp3'],
    volume: 0.05
  });

  stopMusic (event) {
    this.sound.stop();
  }

  ngOnInit() {
    this.sound.play();
  }
  scrollToElement($element) {
    let elmnt = document.getElementById($element);
    elmnt.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}

