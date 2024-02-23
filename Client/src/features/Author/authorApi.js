export const getAuthors = async(id)=>{
    try{
        const response = await fetch('http://localhost:3000/users',{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "userId":id
            }
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

export const follow =async ({followerId,id})=>{
    try{
        const response = await fetch(`http://localhost:3000/${id}`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({followerId:followerId})
        })


    }catch(err){
        return {data:null,error:err.message}
    }
}

export const unFollow = async ({followerId,id})=>{
    try{
        
    }catch(err){
        return {data:null,error:err.message}
    }

}