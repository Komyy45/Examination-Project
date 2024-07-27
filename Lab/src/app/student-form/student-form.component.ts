import { Component, EventEmitter, Output, output } from '@angular/core';
import { Students } from '../Model/StudentModel';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  studentName: string = "";
  studentEmail: string = ""
  @Output() Event = new EventEmitter();
  addStudent() : void{
    Students.push({ id : Students.length + 1, name : this.studentName , email : this.studentEmail  })
    this.Event.emit(Students)
  }
}
