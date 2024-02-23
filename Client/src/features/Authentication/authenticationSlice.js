import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, setLocalStorage } from "../../utils";
import { login, register, sendEmail, sign, userVerify, verifyEmail } from "./authApi";
export const signUser = createAsyncThunk("signIn",async(body,{rejectWithValue})=>{
    try{
        const response = await sign(body)
        const {data,error} = response
        if(error){
            return {error}
        }
        return data
    }catch(err){
        console.log(err)
        return err
    }
})

export const sendEmailVerification = createAsyncThunk("emailVerification",async(body,{rejectWithValue})=>{
    try{
        const response = await sendEmail(body)
        const {data,error} = response
        if(error){
            return {error:error}
        }
        return data
    }catch(err){
        return rejectWithValue(err.message)
    }
})

export const verificationEmail  = createAsyncThunk("verifyEmail",async(body,{rejectWithValue})=>{
    try{
        const response = await verifyEmail(body)
        const {data,error} = response
        if(error){
            return {error:error}
        }
        return data
    }catch(err){
        return {data:null,err:err.message}
    }
})

export const loginUser  = createAsyncThunk("login",async (body,{rejectWithValue})=>{
    try{
        console.log(body)
        const response = await login(body)
        const {data,error} = response
        if(error){
            return {error:error}
        }
        return data
    }catch(err){
        console.log(err)
    }
})

export const userVerification = createAsyncThunk("userVerify",async(token,{rejectWithValue})=>{
    try{
        const {data,error} = await userVerify(token)
        if(error){
            return false
        }
        console.log(data)
        return data
    }catch(err){
        return rejectWithValue(err)
    }
})

export const registerUser = createAsyncThunk("register",async(body,{rejectWithValue})=>{
    try{
        const {data,error} = await register(body)
       
        if(error){
            return {error:error}
        }
        return data
    }catch(err){
        console.error(err)
        return rejectWithValue(err)
    }
})

const authenticationSlice = createSlice({
    name:'auth',
    initialState:{
        currentUser:localStorage.getItem('current-user') ? JSON.parse(localStorage.getItem('current-user')):null,
        token:localStorage.getItem('token'),
        loading:false,
        error:false,
        message:'',
        userValid:true,
        success:false
    },
    reducers:{
        logOut:(state,action)=>{
            localStorage.removeItem('token')
            localStorage.removeItem('current-user')
            localStorage.clear()
            state.currentUser=null
            state.token=null
            state.userValid=false
        },
        setErrorFalse:(state,action)=>{
            state.error = false
            state.message=''
        },
        setSuccessFalse:(state,action)=>{
            state.success = false
            state.message=''
        },
        setInitialState:(state,action)=>{
            state.error=false
            state.message=''
        }
    },extraReducers:(builder)=>{
        builder.addCase(userVerification.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(userVerification.fulfilled,(state,action)=>{
            const {auth} = action.payload
            state.loading = false
            if(!auth){
                state.userValid = false
                state.token = null
                state.currentUser = null
                clearLocalStorage()
            }
        })
        builder.addCase(loginUser.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.loading=false
            clearLocalStorage()
            if(action.payload.error){
                state.error = true
                state.message = action.payload.error
            }else{
                state.success=true
                const {user,token} = action.payload
                state.currentUser=user
                state.token=token
                localStorage.setItem('token',token)
                state.userValid=true
                localStorage.setItem('current-user',JSON.stringify(user))
            }
        })
        builder.addCase(signUser.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(signUser.fulfilled,(state,action)=>{
            state.loading = false
            clearLocalStorage()
            const {error,token,user}=action.payload
            if(error){
                state.error=true
                state.message=error
            }
            else{
                state.success=true
                state.token = token
                state.userValid = true
                
                setLocalStorage(user,token)
                state.currentUser = user
            }
        })
        builder.addCase(signUser.rejected,(state,action)=>{
            state.error=true
            state.message=action.error.message
        })
        builder.addCase(registerUser.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(registerUser.fulfilled,(state,action)=>{
            state.loading = false
            if(action.payload.error){
                state.error=true
                state.message=action.payload.error
            }else{
                const currentUser = {...state.currentUser,...action.payload}
                console.log(currentUser)
                state.currentUser =currentUser
                state.success = true
                localStorage.setItem('current-user',JSON.stringify(currentUser))
            }
        })
        .addCase(sendEmailVerification.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(sendEmailVerification.fulfilled,(state,action)=>{
            state.loading =false
            const {error,message} = action.payload
            if(error){
                state.error=true
                state.message=error
            }
            else{
                state.message=message
            }
        })
        .addCase(verificationEmail.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(verificationEmail.fulfilled,(state,action)=>{
            state.loading=false
            if(action.payload.error){
                state.error=true
                state.message=action.payload.error
            }
            else{
                state.success=true
                const currentUser = {...state.currentUser,emailVerify:true}
                state.currentUser = currentUser
                localStorage.setItem('current-user',JSON.stringify(currentUser))
            }

        })
    }
})

export const loadingSelector = (state)=>state.auth.loading

export const errorSelector = (state)=>state.auth.error

export const messageSelector = (state)=>state.auth.message

export const currentUserSelector = (state)=>state.auth.currentUser

export const tokenSelector = (state)=>state.auth.token

export const successSelector = (state)=>state.auth.success

export const userValidSelector = (state)=>state.auth.userValid



export const {logOut,setErrorFalse,setSuccessFalse,setInitialState}=authenticationSlice.actions

export default authenticationSlice.reducer

