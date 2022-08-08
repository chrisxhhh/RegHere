import fetch from 'unfetch';





const checkStatus = response => {
    console.log(response);
    if (response.ok) {
        console.log("ok");
        return response
    }else{
        let error = new Error(response.stateusText);
        error.response = response;
        response.json().then(e => {
            error.error = e;
        });
        return Promise.reject(error);
    }
}


// ----------------Programs----------------------
export const getAllPrograms = () =>{
    return fetch('api/program');
}



// -----------------Participants------------------------
// export const getAllParticipants = () => 
//     fetch('api/students').then(checkStatus);

export const addNewParticipants = (student) => {
    console.log(student);
    return fetch('api/students', {
        headers:{'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(student)
    }).then(checkStatus);
}

export const getOneProgramMember = (program_id) =>{
    const encodedValue = encodeURIComponent(program_id);
    //console.log(`api/students?id=${encodedValue}`)
    
    return fetch(`api/students?id=${encodedValue}`).then(checkStatus);
}

export const addNewProgram = (program) =>{
    return fetch('api/program',{
        headers:{'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(program)
    }).then(checkStatus);
    
} 