
import { all } from 'redux-saga/effects';
import { watchadvancedsearchgetjob, watchcreatejob, watchdeleteuserdata, watchgetjob, watchgetuser, watchgetuserdata, watchsearchgetjob } from './createjob';
import { watchputjob, watchupdatejob } from './Updatejobsaga';
import { watchgetapplicantuser, watchgetviwjobs, watchputapplicantuser } from './ApplicantuserSaga';
function* rootsaga()
{
    return yield all([watchcreatejob(), watchgetjob(),watchgetuser(),watchgetuserdata (),watchdeleteuserdata()
    ,watchupdatejob(),watchputjob(),watchsearchgetjob(),watchadvancedsearchgetjob(),watchgetapplicantuser(),watchputapplicantuser(),watchgetviwjobs()])
}
export default rootsaga;