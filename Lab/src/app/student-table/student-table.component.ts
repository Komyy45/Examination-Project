import { Component , Input} from '@angular/core';
import { Student, Students , removeStudent } from '../Model/StudentModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent{
  @Input() students : Student[] = [];

  deleteElement(i : number) : void{
    console.log("success");
    removeStudent(i);
    this.students  = Students;
  }
}
