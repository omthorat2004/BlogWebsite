
import { sendEmailVerification, setErrorFalse, setSuccessFalse } from "../features/Authentication/authenticationSlice"
export const showAuthAlert = (success,error,dispatch,navigate,operation)=>{
    
    if(error){
        const timeOut = setTimeout(()=>{
            dispatch(setErrorFalse())
        },2000)
    }
    if(success){
        if(operation=='api/sign'){
            navigate('/verify-email')
        }else{
            navigate('/')
        }
        dispatch(setSuccessFalse())
    }

}

const handleError = (dispatch)=>{
        const timeOut = setTimeout(()=>{
            dispatch(setErrorFalse())
        },2000)
}

export const showSignAlert = (error,message,dispatch)=>{
    if(error){

        handleError(dispatch)
        return;
    }
}

export const handleLoginError = (error,message,dispatch,toast,email)=>{
    if(error){
        if(message.includes('Email is not verified')){
            dispatch(sendEmailVerification({email:email,name:message.slice(21)}))
            toast.success('Email verification sent to your email please check your email',{
                position:'top-right'
            })
            window.opener = null;
            window.open("", "_self");
            window.close();
            setTimeout(()=>{
                dispatch(setErrorFalse())
                
            },2000)
        }
    }
}