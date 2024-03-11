const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    isloading : false,
  data : null,
  error: null
}


const ProfileupdateSlice = createSlice({
  name :"applicantuser",
  initialState, 
  reducers :{
    applicantgetuserrequest : function(state, {payload}){
        state.isloading = true;
    },
    applicantgetusersuccess : function(state, {payload}){
        state.isloading = false;
        state.data = payload;       
    },
    applicantgetuserfaile : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    putapplicantuserrequest : function(state, {payload}){
        state.isloading = true;
    },
    putapplicantusersuccess : function(state, {payload}){
        state.isloading = false;
        state.data = payload;       
    },
    putapplicantuserfaile : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    employeegetuserrequest : function(state, {payload}){
        state.isloading = true;
    },
    employeeSucgetuserrequest : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
    employeeFailgetuserrequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    advancesearchuserrequest : function(state, {payload}){
        state.isloading = true;
    },
    Sucadvancesearchuserrequest : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
   Faileadvancesearchuserrequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    endjobUserdeleterequst : function(state, {payload}){
        state.isloading = true;
    },
    SucendjobUserdeleterequst : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
   FaileendjobUserdeleterequst : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    ratingputapplicanterequest : function(state, {payload}){
        state.isloading = true;
    },
    Sucratingputapplicanterequest : function(state, {payload}){
        state.isloading = false;
        state.data = payload;
    },
   Faileratingputapplicanterequest : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
  }
})

export const {applicantgetuserrequest,applicantgetusersuccess,applicantgetuserfaile,putapplicantuserrequest, putapplicantusersuccess ,putapplicantuserfaile,
    employeegetuserrequest,
    employeeSucgetuserrequest,
    employeeFailgetuserrequest,
    advancesearchuserrequest,
    Sucadvancesearchuserrequest,
    Faileadvancesearchuserrequest,
    endjobUserdeleterequst,
    SucendjobUserdeleterequst,
    ratingputapplicanterequest,
    Sucratingputapplicanterequest,
    Faileratingputapplicanterequest,
    FaileendjobUserdeleterequst
} = ProfileupdateSlice.actions
export default ProfileupdateSlice.reducer