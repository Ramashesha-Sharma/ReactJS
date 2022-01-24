import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ShowStudents } from "./ShowStudents";


export default function Search(){
    let {searchText}=useParams();
    let dispatch=useDispatch();

    let [stAr,setStAr]=useState([]);
    let studentArr=useSelector((reducer)=>reducer.StudReducer);
    searchText=searchText.toLowerCase();
    console.log(searchText);
    console.log(studentArr);
    
    useEffect(()=>{
        dispatch(ShowStudents());
        setStAr(studentArr);
    },[])
    console.log(stAr);
    return(
        <table>
            {
                studentArr.map((stu,index)=>(stu.stuName.toLowerCase().includes(searchText) || stu.stuId.toString().includes(searchText) || stu.stuDept.toLowerCase().includes(searchText))
                &&
                <tr key={index}>
                    <td>{stu.stuId}</td>
                    <td>{stu.stuName}</td>
                    <td>{stu.stuDept}</td>
                    <td>{stu.stuYear}</td>
                </tr>)
            }
        </table>
    );
}