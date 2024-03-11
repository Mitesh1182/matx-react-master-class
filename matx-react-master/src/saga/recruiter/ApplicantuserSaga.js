import { Faileadvancesearchuserrequest, FaileendjobUserdeleterequst, Faileratingputapplicanterequest, Sucadvancesearchuserrequest, SucendjobUserdeleterequst, Sucratingputapplicanterequest, advancesearchuserrequest, applicantgetuserfaile, applicantgetuserrequest, applicantgetusersuccess, employeeFailgetuserrequest, employeeSucgetuserrequest, employeegetuserrequest, endjobUserdeleterequst, putapplicantuserfaile, putapplicantuserrequest, putapplicantusersuccess, ratingputapplicanterequest } from "slice/recruiter/applicant/ProfileupdateSlice"
import { call, put, takeEvery } from "redux-saga/effects"
import { GetApplicants, advancedsearchemployeegetuser, advanceviewjobpoup, applicantuserputData, employeegetuser, endjobgetRequest, getjobupdatedata, ratinggetRequest } from "service/recruiter/recruiterjob"
import { advancesearchviewfailgetJobrequest, advancesearchviewgetJobrequest, advancesearchviewsucgetJobrequest, viewfailgetJobrequest, viewgetJobrequest, viewsucgetJobrequest } from "slice/recruiter/ViewApplivastionSlice"



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

// advanced job seach start

function* advancesearchviewgetJobs (action)

{
  try{
    let mydat = yield call(advanceviewjobpoup, action.payload)
  yield put(advancesearchviewsucgetJobrequest(mydat))
}
catch(error){
     yield put(advancesearchviewfailgetJobrequest(error))
 }
}
export function* advancedwatchgetviwjobs ()
{
  return yield takeEvery(advancesearchviewgetJobrequest, advancesearchviewgetJobs )
}


// advanced job seach  end 
// view Application end =---==------->

// employees get user start

function* employeesGetuser (action)

{
  try{
    let mydat = yield call(employeegetuser, action.payload)
  yield put(employeeSucgetuserrequest(mydat))
}
catch(error){
     yield put(employeeFailgetuserrequest(error))
 }
}
export function* whatchemployeesgetuser ()
{
  return yield takeEvery(employeegetuserrequest, employeesGetuser )
}


// employees get user end


// employees get user start

function* advancedSearchemployeesGetuser (action)

{
  try{
    let mydat = yield call(advancedsearchemployeegetuser, action.payload)
  yield put(Sucadvancesearchuserrequest(mydat))
}
catch(error){
     yield put(Faileadvancesearchuserrequest(error))
 }
}
export function* whatchadvancedSrarchgetuser ()
{
  return yield takeEvery(advancesearchuserrequest, advancedSearchemployeesGetuser )
}


// employees get user end


// end job get user start

function* endjobemployeesGetuser (action)

{
  try{
    let mydat = yield call(endjobgetRequest, action.payload)
  yield put(SucendjobUserdeleterequst(mydat))
}
catch(error){
     yield put(FaileendjobUserdeleterequst(error))
 }
}
export function* whatchaendjobUserdeleterequst ()
{
  return yield takeEvery(endjobUserdeleterequst, endjobemployeesGetuser )
}


// end job get user end


// rating update start

function* enratingemployeesGetuser (action)

{
  try{
    let mydat = yield call(ratinggetRequest, action.payload)
  yield put(Sucratingputapplicanterequest(mydat))
}
catch(error){
     yield put(Faileratingputapplicanterequest(error))
 }
}
export function* whatcharatingrequst ()
{
  return yield takeEvery(ratingputapplicanterequest, enratingemployeesGetuser )
}


// rating update end