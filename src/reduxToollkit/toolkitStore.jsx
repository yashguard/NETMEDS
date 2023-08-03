import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from "./userSlice";

const toolkitstore = configureStore({
    reducer:{users:userSlice.reducer}
})
export default toolkitstore