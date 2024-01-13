import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const login = createAsyncThunk("loin",async (body,{rejectWithValue})=>{
    try{
     
    }catch(err){
        return rejectWithValue(err)
    }
})
const authenticationSlice = createSlice({
    name:'auth',
    initialState:{
        currentUser:JSON.parse(localStorage.getItem('current-user')) || null,
        token:localStorage.getItem('token'),
        loading:false,
        error:false,
        message:'',
        userValid:true
    },
    reducers:{
        logOut:(state,action)=>{
            localStorage.removeItem('token')
            localStorage.removeItem('current-user')
            localStorage.clear()
            state.currentUser=null
            state.token=null
            state.userValid=false
        }
    },extraReducers:(builder)=>{
        
    }
})
