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
import { ProfessionalSummaryComponent } from './resume/professional-summary/professional-summary.component';
import { WorkHistoryComponent } from './resume/work-history/work-history.component';
import { HobbiesComponent } from './resume/hobbies/hobbies.component';
import { PersonalDetailsComponent } from './resume/personal-details/personal-details.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { EducationComponent } from './resume/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ResumeComponent,
    ResumeHeaderComponent,
    ProfessionalSummaryComponent,
    WorkHistoryComponent,
    HobbiesComponent,
    PersonalDetailsComponent,
    SkillsComponent,
    EducationComponent
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
