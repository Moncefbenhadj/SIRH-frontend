
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

export const listeEmployes = async() => {
    let empolyee=[];
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
        
    await fetch('http://localhost:3000/api/employe/afficher', {
        method:'GET',
        //body: reqBody,
        headers: {
            'Content-Type': 'Application/json'
            
        }
    
    }).then(
        (res)=>{
        
            return res.json(); 
        }
    ).then(function(r) {
        console.log("les emplyes dans API then",r);
        empolyee=r;
    })
    return empolyee;
}

export const supprimee = (id) => {
    
        
    fetch('http://localhost:3000/api/employe/supprimer/'+id, {
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
    
    console.log("LHAAAAA9");       
    fetch('http://localhost:3000/api/employe/register', {
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