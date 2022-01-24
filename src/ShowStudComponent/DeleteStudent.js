import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { delStudents } from "../actions/StudAction";
export default function DeleteStudent() {
    let {id}=useParams();
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(delStudents(parseInt(id)));
    },[]);
    
    return(
        <>
            <h2>Student with id {id} deleted successfully...!</h2>
            <Navigate to="/students/showall"></Navigate>
        </>
    );
}