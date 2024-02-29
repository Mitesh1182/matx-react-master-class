import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading : false,
    data : null,
    error: null,
}

const ViewApplivastionSlice = createSlice({
  name: "Viewapplication",
  initialState,
  reducers: {
    viewgetJobrequest : function(state, {payload}){
        state.isloading = true;
    },
    viewsucgetJobrequest : function(state, {payload}){
        state.isloading = false;
        state.listData = payload;
    },
    viewfailgetJobrequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    }
  }
});

export const {viewgetJobrequest,viewsucgetJobrequest,viewfailgetJobrequest} = ViewApplivastionSlice.actions

export default ViewApplivastionSlice.reducer