import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  scrollToElement($element){
    var elmnt = document.getElementById($element);
    elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
