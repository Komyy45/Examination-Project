export class Student{
  constructor(public id:number, public name: string , public email: string ){}
}


export let Students : Student[] = [];

export function removeStudent(index: number){
  Students = Students.filter((e , i) => index != i);
}
