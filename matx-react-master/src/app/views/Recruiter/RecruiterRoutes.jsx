import CreateJob from "./CreateJob";
import ListJobs from "./Listjobs";
import Profile from "./Profile";
import ViewApplicaton from "./ViewApplicaton";

const RecruiterRoutes = [
  { path: '/Recruiter/CreateJob', element: <CreateJob/> },
  { path: '/Recruiter/Profile', element: <Profile/> },
  { path: '/Recruiter/Listjobs', element: <ListJobs/> },
  { path: '/Recruiter/ViewApplicaton', element: <ViewApplicaton/> }
];

export default RecruiterRoutes;
