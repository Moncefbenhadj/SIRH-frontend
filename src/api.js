
const api_root = 'http://localhost:3000/api';
export const login = (email,password) => {
    const reqBody = JSON.stringify({
        email: email, 
        password: password
    })
        
    fetch('http://localhost:3000/api/user/login', {
        method:'POST',
        body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    ).then(
        (res)=>{
            localStorage.setItem('token',res.token);
        }
    )
}

export const listeEmployes = () => {
    /*const reqBody = JSON.stringify({
        nom: nom, 
        prenom: prenom,
        email: email,
        Ntel: Ntel,
        adresse: adresse,
        sexe:sexe,
        datenaissance: datenaissance,
        daterecrutement: daterecrutement

    })*/
        
    return fetch(`${api_root}/employe/`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}

export const supprimee = (id) => {
    
        
    return fetch(`${api_root}/employe/${id}`, {
        method:'DELETE',
        
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}


export const ajouter = (nom,prenom,email,Ntel,adresse,sexe,datenaissance,daterecrutement) => {
    const reqBody = JSON.stringify({
        
        nom : nom,
        prenom: prenom,
        email: email,
        Ntel: Ntel,
        adresse: adresse,
        sexe: sexe,
        datenaissance: datenaissance,
        daterecrutement: daterecrutement
    })
    
           
    fetch(`${api_root}/employe`, {
        method:'POST',
        body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
            
        }
    
    }).then(
        (res)=>{
            console.log("KKKKKKKKKKK",res); 
            return res.json(); 
            
            
        }
        
    )

}


export const getEmploye = (id) => {
    return fetch(`${api_root}/employe/${id}`, {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
            return res.json(); 
        }
    )
}


export const modifier = async(empolyeUpdated,id) => {

    const reqBody = JSON.stringify(empolyeUpdated)
    let response;
           
   await  fetch(`${api_root}/employe/${id}`, {
        method:'PUT',
        body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
            
        }
        
    
    }).then(
        (res)=>{
            
            console.log("Raho yfetchi",res); 
            response= res;
            
            
        }
        
    )
return response;
}