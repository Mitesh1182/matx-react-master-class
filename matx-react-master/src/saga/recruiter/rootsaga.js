
import { all } from 'redux-saga/effects';
import { watchcreatejob } from './createjob';
function* rootsaga()
{
    return all([watchcreatejob])
}
export default rootsaga;