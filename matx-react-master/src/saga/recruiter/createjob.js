
import { takeEvery, call } from "redux-saga/effects";
import { createJobSuc, createJobfaile, createJobrequest } from "slice/recruiter/createjobslice";


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