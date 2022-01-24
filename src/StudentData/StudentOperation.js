import {Student} from './Student';

export class StudentOperation{
    studArray=new Set();
    
    constructor(){
        this.studArray.add(new Student(300,'Abc','CSE','Third year'));
        this.studArray.add(new Student(400,'Def','ECE','Third year'));
    
    }
    
    getAllStudents(){
        return [...this.studArray];
    }

    addStudent(stu){
        let newStu = new Student(parseInt(stu.stuId),stu.stuName,stu.stuDept,stu.stuYear);
        this.studArray.add(newStu);
        return [...this.studArray];
    }

    searchStudent(stuId){
        return [...this.studArray].find((student)=>student.stuId===stuId);
    }
    deleteStudent(stuId){
        let student=this.searchStudent(stuId);
        this.studArray.delete(student);
        return [...this.studArray];

    }
    updateStudent(stu){
        let stuId= parseInt(stu.stuId);
        let newStu = new Student(parseInt(stu.stuId),stu.stuName,stu.stuDept,stu.stuYear);
        let student=this.searchStudent(stuId);
        this.studArray.delete(student);
        this.studArray.add(newStu);
        
        return [...this.studArray];
    }
}