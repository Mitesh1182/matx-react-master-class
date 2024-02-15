const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    isloading : false,
  data : null,
  error: null
}


const userslice = createSlice({
  name :"user",
  initialState, 
  reducers :{
    userrequest : function(state, {payload}){
        state.isloading = true;
    },
    usersuccess : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
    userfaile : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    }
  }
})

export const {userrequest,usersuccess,userfaile} = userslice.actions
export default userslice.reducer