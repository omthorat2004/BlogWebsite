export const setLocalStorage = (user,token)=>{
    localStorage.setItem('current-user',JSON.stringify(user))
    localStorage.setItem('token',token)
}

export const clearLocalStorage = ()=>{
    localStorage.clear()
}