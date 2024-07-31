import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    Loading:false,
    Updateprofilemessage:"",
    UpdateprofileStatus:"",
    Updateprofileerror:"",
}

export const Updateprofile = createAsyncThunk(
    "Uprofile/Updateprofile",
    async (values,{rejectWithValue})=>{
        try {
            
            const Data = await axios.patch(`http://localhost:5000/api/Wprofi`,{
                image: values.image,
                Username: values.Username,
                Businessmail: values.Businessmail,
                Phonenumber: values.Phonenumber,
                Email: values.Email,
            });

            return Data.data

        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
)

const UpdateprofileSlice = createSlice({
    name:"Uprofile",
    initialState,
    reducers:{
        CLearuprofile(state,action){
            return{
                ...state,
                Updateprofilemessage:[],
                UpdateprofileStatus:"",
                Updateprofileerror:[],
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(Updateprofile.pending,(state,action)=>{
            return{
                ...state,
                Loading:true,              
            }
        })
        builder.addCase(Updateprofile.fulfilled,(state,action)=>{
            let Data = action.payload;

            return{
                ...state,
                Loading:false,
                Updateprofilemessage:Data,
                UpdateprofileStatus:"Sucess"
            }
        })
        builder.addCase(Updateprofile.rejected,(state,action)=>{
            return{
                ...state,
                UpdateprofileStatus:'reject',
                Updateprofileerror:action.payload
            }
        })
    }
})

export const { CLearuprofile } =UpdateprofileSlice.actions;
export default UpdateprofileSlice.reducer;