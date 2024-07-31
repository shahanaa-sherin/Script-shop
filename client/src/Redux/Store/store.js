import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice"; 
import ScriptSlice from '../Slices/ScriptSlice';
import UpdatepassSlice from '../Slices/UpdatepassSlice';
import ScripDirectortSlice from "../Slices/ScriptDirector";
import UpdateprofileSlice from "../Slices/ProfileSlice";
const store = configureStore({
    reducer:{
        auth:AuthSlice,
        script:ScriptSlice,
        upass:UpdatepassSlice,
        dScript:ScripDirectortSlice,
        profileu:UpdateprofileSlice,
    }

})

export default store;