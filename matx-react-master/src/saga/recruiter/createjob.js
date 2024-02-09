
import { takeEvery, call } from "redux-saga/effects";
import { getjobData } from "service/recruiter/recruiterjob";
import { createJobSuc, createJobfaile, createJobrequest, failgetJobrequest, getJobrequest, sucgetJobrequest } from "slice/recruiter/createjobslice";


function* createjob (action)

{
  try{
    let mydat = call(createjob, action.payload)
  yield createJobSuc(mydat)
}
catch(error){
     yield createJobfaile(error)
 }
}
export function* watchcreatejob ()
{
  return yield takeEvery(createJobrequest, createjob)
}


function* getJOb (action)

{
  try{
    let mydat = call(getjobData, action.payload)
  yield sucgetJobrequest(mydat)
}
catch(error){
     yield failgetJobrequest(error)
 }
}
export function* watchgetjob ()
{
  return yield takeEvery(getJobrequest, getJOb)
}
