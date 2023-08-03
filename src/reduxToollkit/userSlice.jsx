const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name:"user" ,
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        }
    }
})

export {userSlice};
export const {addUser}=userSlice.actions