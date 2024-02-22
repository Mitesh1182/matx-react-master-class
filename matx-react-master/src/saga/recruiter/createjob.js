
import { toast } from "react-toastify";
import { takeEvery, call, put } from "redux-saga/effects";
import createjobAPI, { deletejobData, getjobData, searchgetJobDataSearch, userData, usergetData } from "service/recruiter/recruiterjob";
import { createJobSuc, createJobfaile, createJobrequest, failgetJobrequest, getJobrequest, searchfailgetJobrequest, searchgetJobrequest, searchsucgetJobrequest, sucgetJobrequest } from "slice/recruiter/createjobslice";
import { userdeletefaile, userdeleterequest, userdeletesuccess, userfaile, usergetfaile, usergetrequest, usergetsuccess, userrequest, usersuccess } from "slice/recruiter/userSlice";


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

function* searchgetJOb (action)

{
  try{
    let mydat = yield call(searchgetJobDataSearch, action.payload)
  yield put(searchsucgetJobrequest(mydat))
}
catch(error){
     yield put(searchfailgetJobrequest(error))
 }
}
export function* watchsearchgetjob ()
{
  return yield takeEvery(searchgetJobrequest, searchgetJOb)
}


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
function* getuserdata (action)

{
  try{
    let mydat = yield call(usergetData, action.payload)
  yield put(usergetsuccess(mydat))
}
catch(error){
     yield put(usergetfaile(error))
 }
}
export function* watchgetuserdata ()
{
  return yield takeEvery(usergetrequest, getuserdata )
}




function* deleteuserdata (action)

{
  try{
    let Mitesh = yield call(deletejobData, action.payload)
  yield put(userdeletesuccess(Mitesh))
  toast.success("Job Deleted");
  yield put(getJobrequest())
}
catch(error){
     yield put(userdeletefaile(error))
 }
}
export function* watchdeleteuserdata ()
{
  return yield takeEvery(userdeleterequest, deleteuserdata )
}