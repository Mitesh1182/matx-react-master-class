
import { all } from 'redux-saga/effects';
import { watchcreatejob, watchgetjob, watchgetuser } from './createjob';
function* rootsaga()
{
    return yield all([watchcreatejob(), watchgetjob(),watchgetuser()])
}
export default rootsaga;