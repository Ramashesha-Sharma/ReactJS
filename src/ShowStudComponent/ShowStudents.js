import './ShowStudents.css';
import {useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from '@material-ui/core';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
function TableBody(){

    let studAr = useSelector((store)=>store.StudReducer);
    return(
        <>
            {
                studAr.map((student)=>{
                    return(
                        <tr key={student.stuId}><td>{student.stuId}</td>
                        <td>{student.stuName}</td>
                        <td>{student.stuDept}</td>
                        <td>{student.stuYear}</td>
                        <td><Button startIcon={<DeleteSharpIcon/>} class='btn btn-danger'>
                        <NavLink style={{'color':'white'}} to={`/students/delete/${student.stuId}`}>DELETE</NavLink></Button>
                        {/* <td><Button href={`/students/delete/${student.stuId}`} color="primary" variant='conatined'>Delete</Button></td> */}
                        <Button startIcon={<EditSharpIcon/>} class='btn btn-primary'>
                        <NavLink style={{'color':'white'}} to={`/students/update/${student.stuId}`}>UPDATE</NavLink></Button></td>
                        </tr>
                    );
                })
            }
        </>
    );
}

export function ShowStudents(){
    let [searchText,setText]=useState('');
    
    let changeInput=(e)=>{
        setText(e.target.value);
    }
        
    return(
        <><br/>
            <h3 style={{'color':'brown'}}>Student Details</h3>
            <label>Search : </label>
            <input type="text" value={searchText} name='searchText' onChange={changeInput}/>
            <Button startIcon={<SearchIcon/>} class='btn btn-primary'>
                        <NavLink style={{'color':'white'}} to={`/students/search/${searchText}`}>Search</NavLink></Button>
            <hr/>
            <table class="table table-striped table-hover table-light">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Student Department</th>
                        <th>Student Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <TableBody></TableBody>
                </tbody>
            </table>
        </>
    );
}
