import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    ScriptStatus:"",
    ScriptSucess:"",
    ScriptError:"",
    ScriptList:[],
    ScriptListError:"",
}

export const ScriptUpload= createAsyncThunk(
    "script/ScriptUpload",
    async (values,{rejectWithValue})=>{
        try {
            const Data =await axios.post(`http://localhost:5000/api/scriptpost`,{
                Moviename: values.MovieName,
                Synopsis: values.Synopsis,
                Genre: values.Genre,
                ScriptType:values.ScriptType,
                ScriptFile: values.ScriptFile,
                Useremail: values.email,
            });

            return Data.data

        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

export const UserScript = createAsyncThunk(
    "script,UserScript",
    async (values,{rejectWithValue})=>{
        try {
            let Data = await axios.get(`http://localhost:5000/api/Wscript/${values}`)

            return Data.data

        } catch (error) {
             console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
)




const ScriptSlice =createSlice({
    name:"script",
    initialState,
    reducers:{
        removeStatus(state,action){
            return{
                ...state,
                ScriptStatus:"",
                ScriptSucess:"",
            }
        },
        removeScriptlistWriter(state,action){
            return{
                ...state,
                ScriptList:[],
                ScriptListError:"",
                ScriptError:"",
                ScriptStatus:"",
                ScriptSucess:"",
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(ScriptUpload.pending,(state,action)=>{
            return {...state,ScriptStatus:"pending"}
        });
        builder.addCase(ScriptUpload.fulfilled,(state,action)=>{
                
                const Sucess = action.payload; 

                return{
                    ...state,
                    ScriptStatus:"sucess",
                    ScriptSucess:Sucess,
                }
        });
        builder.addCase(ScriptUpload.rejected,(state,action)=>{
            return{
                ...state,
                ScriptStatus:"rejected",
                ScriptError:action.payload,
            }
        });
        builder.addCase(UserScript.pending,(state,action)=>{
            return {...state,ScriptStatus:"pending"}
        });
        builder.addCase(UserScript.fulfilled,(state,action)=>{
                
            const Script = action.payload; 

            return{
                ...state,
                ScriptStatus:"sucess",
                ScriptList:Script,
            }
    });
    builder.addCase(UserScript.rejected,(state,action)=>{
        return{
            ...state,
            ScriptListError:action.payload,
        }
    });
    }
})

export const {removeStatus,removeScriptlistWriter} = ScriptSlice.actions;
export default ScriptSlice.reducer;