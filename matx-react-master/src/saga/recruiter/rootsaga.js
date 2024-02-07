import { all } from 'redux-saga';
import { watchcreatejob } from './createjob';
function* rootsaga()
{
    return all([watchcreatejob])
}
export default rootsaga;