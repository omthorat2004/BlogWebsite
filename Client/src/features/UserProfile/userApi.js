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