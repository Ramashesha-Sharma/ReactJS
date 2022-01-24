import { useState } from "react";
import { Student } from "../StudentData/Student";
import { addStu } from "../actions/StudAction";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import './AddStudent.css';
import { Button } from "@material-ui/core";
export default function AddStudent(){
    let [flag, setFlag]=useState(false);
    const [student,setStudent] = useState(new Student());
    const setDetails=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }
    let dispatch=useDispatch();
    const test=(e)=>{
        e.preventDefault();
        console.log(student);
        dispatch(addStu(student));
        setFlag(true);
    }
    return(
        <div className="formDiv">
            {flag===false?
            <form onSubmit={test}>
                <div>
                <label>Enter ID : <br/>
                <input type="number" name="stuId" value={student.stuId} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Name : <br/>
                <input type="text" name="stuName" value={student.stuName} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Department : <br/>
                <input type="text" name="stuDept" value={student.stuDept} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Year : <br/>
                <input type="text" name="stuYear" value={student.stuYear} onChange={setDetails}></input>
                </label></div><br/>
                <button style={{'margin':'10px'}} class="btn btn-success" type="submit">Add Student</button>
                <button class="btn btn-primary" type="reset">Clear</button>
            </form>:<Navigate to="/students/showall"></Navigate>}
        </div>
    );
}