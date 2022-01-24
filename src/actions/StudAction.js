
/* export const showStudents=()=>{
    return{
        type:'SHOWSTUDENTS'
    }
}

 */
export const delStudents=(stuId)=>{
    return{
        type:'DELETESTUDENTS',
        payload:stuId
    }
}

export const addStu=(student)=>{
    return{
        type:'ADDSTUDENT',
        payload:student

    }
}

export const updateStu=(student)=>{
    return{
        type:'UPDATESTUDENT',
        payload:student

    }
}
export const searchStu=(stuId)=>{
    return{
        type:'SEARCHSTUDENT',
        payload:stuId

    }
}