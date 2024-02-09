
import { all } from 'redux-saga/effects';
import { watchcreatejob, watchgetjob } from './createjob';
function* rootsaga()
{
    return yield all([watchcreatejob, watchgetjob])
}
export default rootsaga;