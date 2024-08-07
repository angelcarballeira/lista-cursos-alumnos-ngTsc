import { Component, OnInit } from '@angular/core';
import { alumnos } from './mock';
import { Alumno } from 'src/app/models/alumno-to';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit{
  public alumnos?: Alumno[] 


    
  ngOnInit(): void {
      this.alumnos = alumnos
  }
}
