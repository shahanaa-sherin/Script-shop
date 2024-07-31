import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    Loading:false,
    Updatepassmessage:"",
    UpdatepassStatus:"",
    Updatepasserror:"",
}

export const Updatepass = createAsyncThunk(
    "Upass/Updatepass",
    async (values,{rejectWithValue})=>{
        try {
            
            const Data = await axios.patch(`http://localhost:5000/api/WUpass`,{
                Currentpassword: values.Currentpassword,
                Newpassword: values.Newpassword,
                Confirmpassword: values.Confirmpassword,
                Email: values.Email
            });

            return Data.data

        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
)

const UpdatepassSlice = createSlice({
    name:"Upass",
    initialState,
    reducers:{
        CLearupass(state,action){
            return{
                ...state,
                Updatepassmessage:[],
                UpdatepassStatus:"",
                Updatepasserror:[],
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(Updatepass.pending,(state,action)=>{
            return{
                ...state,
                Loading:true,              
            }
        })
        builder.addCase(Updatepass.fulfilled,(state,action)=>{
            let Data = action.payload;

            return{
                ...state,
                Loading:false,
                Updatepassmessage:Data,
                UpdatepassStatus:"Sucess"
            }
        })
        builder.addCase(Updatepass.rejected,(state,action)=>{
            return{
                ...state,
                Updatepass:'reject',
                Updatepasserror:action.payload
            }
        })
    }
})

export const {CLearupass} =UpdatepassSlice.actions;
export default UpdatepassSlice.reducer;