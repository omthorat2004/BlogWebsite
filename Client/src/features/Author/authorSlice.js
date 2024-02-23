import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { follow, getAuthors } from "./authorApi";


export const getMultipleAuthors = createAsyncThunk('api/getAuthors',async (id,{rejectWithValue})=>{
    try{
        const response  = await getAuthors(id)
        const {data,error} = response
        if(error){
            return {error:error}
        }
        return data

    }catch(err){
        return rejectWithValue(err.message)
    }
})

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

export const unFollowAuthor = createAsyncThunk("api/unfollow",async ({followerId,id},{rejectWithValue})=>{
    try{

    }catch(err){
        return rejectWithValue(err.message)
    }

})

const authorSlice = createSlice({
    name:'authors',
    initialState:{
        loading:false,
        error:true,
        message:'',
        authors:[],
        success:false
    },reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(getMultipleAuthors.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(getMultipleAuthors.fulfilled,(state,action)=>{
            state.loading=false
            if(action.payload.error){
                state.error = true
                state.message = action.payload.error
            }else{
                state.authors = action.payload.users
            }
        })
    }
})

export const loadingSelector= (state)=>state.author.loading

export const successSelector = (state)=>state.author.success

export const errorSelector = (state)=>state.author.error

export const messageSelector = (state)=>state.author.message

export const authorsSelector = (state)=>state.author.authors

export default authorSlice.reducer