import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isloading : false,
  data : null,
  error: null
}


const createjobslice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    createJobrequest : function(state, {payload}){
        state.isloading = true;
    },
    createJobSuc : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
    createJobfaile : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    }

  }
});

export const {createJobrequest,createJobSuc,createJobfaile} = createjobslice.actions

export default createjobslice.reducer