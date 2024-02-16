import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isloading : false,
  data : null,
  error: null,
  listData : []
}


const createjobslice = createSlice({
  name: 'jobs',
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
    },
    getJobrequest : function(state, {payload}){
      state.isloading = true;
  },
    sucgetJobrequest : function(state, {payload}){
      state.isloading = false;
      state.listData = payload;
  },
    failgetJobrequest : function(state, {payload}){
      state.isloading = false;
      state.error = payload;
  }

  }
});

export const {createJobrequest,
  createJobSuc,
  createJobfaile,
  getJobrequest,
  sucgetJobrequest,
  failgetJobrequest
} = createjobslice.actions

export default createjobslice.reducer