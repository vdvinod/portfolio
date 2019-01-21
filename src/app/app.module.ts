import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ResumeComponent } from './resume/resume.component';
import { ParticlesModule } from 'angular-particle';
import { ResumeHeaderComponent } from './resume/resume-header/resume-header.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ResumeComponent,
    ResumeHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ParticlesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
