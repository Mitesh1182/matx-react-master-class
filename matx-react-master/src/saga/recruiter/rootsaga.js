
import { all } from 'redux-saga/effects';
import { watchadvancedsearchgetjob, watchcreatejob, watchdeleteuserdata, watchgetjob, watchgetuser, watchgetuserdata, watchsearchgetjob } from './createjob';
import { watchputjob, watchupdatejob } from './Updatejobsaga';
function* rootsaga()
{
    return yield all([watchcreatejob(), watchgetjob(),watchgetuser(),watchgetuserdata (),watchdeleteuserdata()
    ,watchupdatejob(),watchputjob(),watchsearchgetjob(),watchadvancedsearchgetjob()])
}
export default rootsaga;