import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from "./slider/slider.component";
import { ProductsComponent } from "./products/products.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { StudentTableComponent } from "./student-table/student-table.component";
import { Student } from './Model/StudentModel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SliderComponent, ProductsComponent, StudentFormComponent, StudentTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Students : Student[] = [];

  getStudents(students: Student[]) : void {
    this.Students  = students;
  }
}
