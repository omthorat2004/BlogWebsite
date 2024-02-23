import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { follow } from "./userApi";

export const followAuthor = createAsyncThunk("api/follow",async ({followerId,id},{rejectWithValue})=>{
    try{
        const response = await follow({followerId:followerId,id:id})
        const {data,error} = response
        if(error){
            return {error:error}
        }
        return data
    }catch(err){
        console.error(err)
        return rejectWithValue(err)
    }

})

const userSlice = createSlice({
    name:'user',
    initialState:{
        loading:false,
        error:false,
        message:'',
    },
    extraReducers:(builder)=>{
        builder.addCase(followAuthor.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(followAuthor.fulfilled,(state,action)=>{
            state.loading = false
            if(action.payload.error){
                state.error = true
                state.message = action.payload.error
            }

        })
    }

})