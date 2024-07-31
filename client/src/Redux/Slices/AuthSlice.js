import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import jwtDecode from 'jwt-decode';
import axios from "axios";

const initialState ={
    token: localStorage.getItem("token"),
    name:"",
    email:"",
    _id:"",
    UserType:"",
    registerStatus:"",
    registerError:"",
}

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (values,{rejectWithValue})=>{
        try {
            const token =await axios.post(`http://localhost:5000/api/Sregister`,{
                Username: values.Username,
                Email: values.Email,
                Password: values.Password,
                ConfirmPassword:values.ConfirmPassword,
            });

            localStorage.setItem("token", token.data)

            return token.data

        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

export const registerDirector = createAsyncThunk(
    "auth/registerDirector",
    async (values,{rejectWithValue})=>{
        try {
            const token =await axios.post(`http://localhost:5000/api/Dregister`,{
                Username: values.Username,
                Email: values.Email,
                Password: values.Password,
                ConfirmPassword:values.ConfirmPassword,
            });

            localStorage.setItem("token", token.data)

            return token.data

        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

export const loginDirector = createAsyncThunk(
    "auth/loginDirector",
    async (values,{rejectWithValue})=>{
        try {
            const token =await axios.post(`http://localhost:5000/api/Dlogin`,{
                Email: values.Email,
                Password: values.Password,
            });

            localStorage.setItem("token", token.data)

            return token.data

        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);


export const loginWriter = createAsyncThunk(
    "auth/loginWriter",
    async (values,{rejectWithValue})=>{
        try {
            const token =await axios.post(`http://localhost:5000/api/Slogin`,{
                Email: values.Email,
                Password: values.Password,
            });

            localStorage.setItem("token", token.data)

            return token.data

        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);
const AuthSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        loadUser(state,action){
            const token = state.token || localStorage.getItem('token');

            if(token){
                const user = jwtDecode(token)

                return{
                    ...state,
                    token: token,
                    name: user.name,
                    email:user.email,
                    _id: user._id,
                    UserType:user.Usertype,
                    userLoaded:true
                }
            }
        },
    logOutUser(state,action){
        localStorage.removeItem("token");

            return{
                ...state,
                token: null,
                name: "",
                email:"",
                _id: "",
                UserType:"",
                registerStatus:"",
                registerError:"",
                userLoaded:true,
            }
    },
},
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state,action)=>{
            return {...state,registerStatus:"pending"}
        });
        builder.addCase(registerUser.fulfilled,(state,action)=>{
            if(action.payload){
                
                const user = jwtDecode(action.payload)

                return{
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email:user.email,
                    _id: user._id,
                    UserType:user.Usertype,
                    registerStatus:"suceess"
                }
            }else return state
        });
        builder.addCase(registerUser.rejected,(state,action)=>{
            return{
                ...state,
                registerStatus:"rejected",
                registerError:action.payload,
            }
        });
        // director register
        builder.addCase(registerDirector.pending,(state,action)=>{
            return {...state,registerStatus:"pending"}
        });
        builder.addCase(registerDirector.fulfilled,(state,action)=>{
            if(action.payload){
                
                const user = jwtDecode(action.payload)

                return{
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email:user.email,
                    _id: user._id,
                    UserType:user.Usertype,
                    registerStatus:"suceess"
                }
            }else return state
        });
        builder.addCase(registerDirector.rejected,(state,action)=>{
            return{
                ...state,
                registerStatus:"rejected",
                registerError:action.payload,
            }
        });
        // Director login 
        builder.addCase(loginDirector.pending,(state,action)=>{
            return {...state,registerStatus:"pending"}
        });
        builder.addCase(loginDirector.fulfilled,(state,action)=>{
            if(action.payload){
                
                const user = jwtDecode(action.payload)

                return{
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email:user.email,
                    _id: user._id,
                    UserType:user.Usertype,
                    registerStatus:"suceess"
                }
            }else return state
        });
        builder.addCase(loginDirector.rejected,(state,action)=>{
            return{
                ...state,
                registerStatus:"rejected",
                registerError:action.payload,
            }
        });
        // Writer login
        builder.addCase(loginWriter.pending,(state,action)=>{
            return {...state,registerStatus:"pending"}
        });
        builder.addCase(loginWriter.fulfilled,(state,action)=>{
            if(action.payload){
                
                const user = jwtDecode(action.payload)

                return{
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email:user.email,
                    _id: user._id,
                    UserType:user.Usertype,
                    registerStatus:"suceess"
                }
            }else return state
        });
        builder.addCase(loginWriter.rejected,(state,action)=>{
            return{
                ...state,
                registerStatus:"rejected",
                registerError:action.payload,
            }
        });
    }
})


export const {loadUser,logOutUser} = AuthSlice.actions
export default AuthSlice.reducer;