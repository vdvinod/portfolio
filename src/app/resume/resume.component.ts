import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  user: object = {};
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  submit(){
    this.db.list('user').push(this.user)
    .then(_=>{
      this.user = {};
    })
  }
}
