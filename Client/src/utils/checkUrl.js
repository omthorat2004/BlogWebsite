export function checkInstagramUrl(link){
    if(link===''){
        return true;
    }
    var regex = /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_]+\/?$/;
    
    return regex.test(link) // return boolean  value it is used to heck the given link is valid or not
}
export function checkFacebookUrl(link){
    if(link===''){
        return true
    }
    var regex = /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9_]+\/?$/;
    return regex.test(link)
}

export function checkUrl({instagram,facebook}){
    
    if (checkFacebookUrl(facebook) && checkInstagramUrl(instagram)){
        return {valid :true,message:''}
    }else if (!checkInstagramUrl(instagram)&&instagram!=''){
        return {valid:false,message:'Invalid Instagram Link'}
    }else{
        return {valid :false,message:'Invalid Facebook Link'}
    }
}