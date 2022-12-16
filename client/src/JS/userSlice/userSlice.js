import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const userRegister=createAsyncThunk("user/register",async(user)=>{
    try {
        let response=await axios.post("http://localhost:5000/user/register",user);
        return  response;
    } catch (error) {
        console.log(error)
    }
});
export const userLogin=createAsyncThunk("user/login",async(user)=>{
    try {
        let response=await axios.post("http://localhost:5000/user/login",user);
        return  response;
    } catch (error) {
        console.log(error)
    }
});
export const userCurrent=createAsyncThunk("user/current",async()=>{
    try {
        let response=await axios.get("http://localhost:5000/user/current",{headers:{Authorization:localStorage.getItem("token"),}});
        return  response;
    } catch (error) {
        console.log(error)
    }
});
export const updateuser= createAsyncThunk(
    "user/update",
    async ({ id, newuser }) => {
      try {
        let response = await axios.put(
          `http://localhost:5000/user/${id}`,
          newuser
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  );

const initialState = {
    user:null,
    status:null};
    export const userSlice=createSlice({     
        name:"user",
        initialState,
        reducers:{},
        extraReducers:{
            [userRegister.pending]:(state)=>{
                state.status="pending";
            },
            [userRegister.fulfilled]:(state,action)=>{
                state.status="successes";
                state.user=action.payload.data.user;
                localStorage.setItem("token",action.payload.data.token);
            },
            [userRegister.rejected]:(state)=>{
                state.status="fail";
            },
            [userLogin.pending]:(state)=>{
                state.status="pending";
            },
            [userLogin.fulfilled]:(state,action)=>{
                state.status="successes";
                state.user=action.payload.data.user;
                localStorage.setItem("token",action.payload.data.token);
            },
            [userLogin.rejected]:(state)=>{
                state.status="fail";
            },
             [userCurrent.pending]:(state)=>{
                state.status="pending";
            },
            [userCurrent.fulfilled]:(state,action)=>{
                state.status="successes";
                state.user=action.payload.data.user;
            },
            [userCurrent.rejected]:(state)=>{
                state.status="fail";
            },
            [updateuser.pending]:(state)=>{
                state.status="pending";
            },
            [updateuser.fulfilled]:(state,action)=>{
                state.status="successes";
                state.user=action.payload.data.user;
            },
            [updateuser.rejected]:(state)=>{
                state.status="fail";
            },
        },
    
    })
   




// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer