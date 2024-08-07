import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { StudentTableComponent } from './components/student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
