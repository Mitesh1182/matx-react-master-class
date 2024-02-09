import CreateJob from "./CreateJob";
import Listjobs from "./Listjobs";
import Profile from "./Profile";

const RecruiterRoutes = [
  { path: '/Recruiter/CreateJob', element: <CreateJob/> },
  { path: '/Recruiter/Profile', element: <Profile/> },
  { path: '/Recruiter/Listjobs', element: <Listjobs/> }
];

export default RecruiterRoutes;
