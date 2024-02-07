import { Call , takeEvery} from "@mui/icons-material"
import { createJobSuc, createJobfaile } from "slice/recruiter/createjobslice";

function* createjob ()
{
 try{
  let mydat = Call(createjob, action.payload);
  yield createJobSuc(mydat);
}
catch{
     yield createJobfaile(mydat);
 }
}
export function* watchcreatejob ()
{
  return yield takeEvery('', createjob)
}
