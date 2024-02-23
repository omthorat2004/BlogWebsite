export const login = async(body)=>{
    try{
        console.log(body)
        const res = await fetch('http://localhost:3000/login',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
        })
        if(!res.ok){
            const {message}  =await res.json()
            throw new Error(message)
        }
        const data = await res.json()
        return {data,error:null}
    }catch(err){
        return {data:null,error:err.message||"Unexpected error occurred"}
    }
}

export const sign = async (body)=>{
    try{
        // console.log(body)
        const res = await fetch('http://localhost:3000/sign',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
       
        if(!res.ok){
            const error = await res.json()
            console.log(res.ok)
            console.log(error)
            const errorMessage = error.message || "Failed to sign in";
            throw new Error(errorMessage);
        }
        else{
        const data = await res.json()
        return {data,error:null}
        }
    }catch(err){
        console.log(err)
        // console.log(err.message)
        return {data:null,error:err.message||"An unexpected error  occurred"}
    }
}

export const register = async (body)=>{
    try{
        const response = await fetch('http://localhost:3000/register',{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
        if(!response.ok){
            const {message} = await response.json()
            throw new Error(message)
        }
        const data = await response.json()
        return {data,error:null}
    }catch(err){{
        return {data:null,error:err.message}
    }}
}

export const userVerify = async (token)=>{
    try{
        const res = await fetch("http://localhost:3000/verify",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'authorisation':token
            }
        })
    if(!res.ok){
        throw new Error('Invalid Token')
    }
    const data = await res.json()
    return {data,error:null}
    }catch(err){
        return {data:null,error:err.message}
    }

}

export const verifyEmail = async (body)=>{
    try{
        const response = await fetch('http://localhost:3000/verify-email',{
         method:'POST',
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify(body)
        })
        if(!response.ok){
            const {message} = await response.json()
            throw new Error(message)
        }
        const data = await response.json()
        return {data,error:null}
    }catch(err){
        return {data:null,error:err.message}
    }
}

export const sendEmail = async(body)=>{
    try{
        const response = await fetch('http://localhost:3000/email',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
        if(!response.ok){
            const error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
        return {data,error:null}  
    }catch(err){
        console.error(err);
        return {data:null,error:err.message}
    }
}