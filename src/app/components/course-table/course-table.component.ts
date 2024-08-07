import { Component, OnInit } from '@angular/core';
import { cursos } from './mock';
import { Curso } from 'src/app/models/curso-to';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit{
  public courses?: Curso[] 
    
  ngOnInit(): void {
      this.courses = cursos
  }
}

