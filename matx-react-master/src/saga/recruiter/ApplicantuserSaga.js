import { applicantgetuserfaile, applicantgetuserrequest, applicantgetusersuccess, putapplicantuserfaile, putapplicantuserrequest, putapplicantusersuccess } from "slice/recruiter/applicant/ProfileupdateSlice"
import { call, put, takeEvery } from "redux-saga/effects"
import { GetApplicants, applicantuserputData, getjobupdatedata } from "service/recruiter/recruiterjob"
import { viewfailgetJobrequest, viewgetJobrequest, viewsucgetJobrequest } from "slice/recruiter/ViewApplivastionSlice"



function* getapplicantuser (action)

{
  try{
    let mydat = yield call(getjobupdatedata, action.payload)
  yield  put(applicantgetusersuccess(mydat))
}
catch(error){
     yield  put(applicantgetuserfaile(error))
 }
}
export function* watchgetapplicantuser ()
{
  return yield takeEvery(applicantgetuserrequest, getapplicantuser)
}
function* putapplicantuser (action)

{
  try{
    let mydat = yield call(applicantuserputData, action.payload)
  yield  put(putapplicantusersuccess(mydat))
}
catch(error){
     yield  put(putapplicantuserfaile(error))
 }
}
export function* watchputapplicantuser ()
{
  return yield takeEvery(putapplicantuserrequest, putapplicantuser)
}


// view Application start =---==------->
function* viewgetJobs (action)

{
  try{
    let mydat = yield call(GetApplicants, action.payload)
  yield put(viewsucgetJobrequest(mydat))
}
catch(error){
     yield put(viewfailgetJobrequest(error))
 }
}
export function* watchgetviwjobs ()
{
  return yield takeEvery(viewgetJobrequest, viewgetJobs )
}

// view Application end =---==------->