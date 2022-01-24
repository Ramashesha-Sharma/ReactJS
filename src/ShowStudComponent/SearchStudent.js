import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ShowStudents } from "./ShowStudents";
import { NavLink } from "react-router-dom";
import { Button } from '@material-ui/core';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';


export function SearchStudent(){
    let dispatch=useDispatch();
    let {searchText}=useParams()
    let [stu,setArr]=useState([]);
    let arr = useSelector((state)=>state.StudReducer);
    
    
    
    useEffect(()=>{
    
        setArr(arr)
    },[])

    console.log(arr);
    return(
        <>
        
        <table className="table" id="nt">
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Student Department</th>
                    <th>Student Year</th>
                    <th>Actions</th>
                </tr>
            </thead>

            {
                arr.map((student)=>{
                    return(
                       (student.stuId.toString().includes(searchText.toLowerCase()) || student.stuName.toLowerCase().includes(searchText.toLowerCase()) || student.stuDept.toLowerCase().includes(searchText.toLowerCase()) || student.stuYear.toLowerCase().includes(searchText.toLowerCase()))?
                        <tr key={student.stuId}>
                            <td>{student.stuId}</td>
                            <td>{student.stuName}</td>
                            <td>{student.stuDept}</td>
                            <td>{student.stuYear}</td>
                            <td><Button startIcon={<DeleteSharpIcon/>} class='btn btn-danger'>
                        <NavLink style={{'color':'white'}} to={`/students/delete/${student.stuId}`}>DELETE</NavLink></Button>
                        {/* <td><Button href={`/students/delete/${student.stuId}`} color="primary" variant='conatined'>Delete</Button></td> */}
                        <Button startIcon={<EditSharpIcon/>} class='btn btn-primary'>
                        <NavLink style={{'color':'white'}} to={`/students/update/${student.stuId}`}>UPDATE</NavLink></Button></td>
                            
                        </tr>:<></>
                        
                    );
                })
            }
            </table>
        </>
    )
}