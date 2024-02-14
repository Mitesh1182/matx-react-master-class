
import { takeEvery, call, put } from "redux-saga/effects";
import createjobAPI, { getjobData } from "service/recruiter/recruiterjob";
import { createJobSuc, createJobfaile, createJobrequest, failgetJobrequest, getJobrequest, sucgetJobrequest } from "slice/recruiter/createjobslice";


function* createjob (action)

{
  try{
    let mydat = yield call(createjobAPI, action.payload)
  yield  put(createJobSuc(mydat))
}
catch(error){
     yield  put(createJobfaile(error))
 }
}
export function* watchcreatejob ()
{
  return yield takeEvery(createJobrequest, createjob)
}


function* getJOb (action)

{
  try{
    let mydat = yield call(getjobData, action.payload)
  yield put(sucgetJobrequest(mydat))
}
catch(error){
     yield put(failgetJobrequest(error))
 }
}
export function* watchgetjob ()
{
  return yield takeEvery(getJobrequest, getJOb)
}
export default createjob