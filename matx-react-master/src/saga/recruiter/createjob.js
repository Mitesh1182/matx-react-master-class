
import { takeEvery, call, put } from "redux-saga/effects";
import createjobAPI, { getjobData, userData } from "service/recruiter/recruiterjob";
import { createJobSuc, createJobfaile, createJobrequest, failgetJobrequest, getJobrequest, sucgetJobrequest } from "slice/recruiter/createjobslice";
import { userfaile, userrequest, usersuccess } from "slice/recruiter/userSlice";


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


function* getuser (action)

{
  try{
    let mydat = yield call(userData, action.payload)
  yield put(usersuccess(mydat))
}
catch(error){
     yield put(userfaile(error))
 }
}
export function* watchgetuser ()
{
  return yield takeEvery(userrequest, getuser)
}