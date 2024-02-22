import ApllicantProfile from "./ApllicantProfile";
import ListJob from "./ListJob";


const ApplicantRoutes = [
  { path: '/applicant/ListJob', element: <ListJob/> },
  { path: '/applicant/ApllicantProfile', element: <ApllicantProfile/> },
  
];

export default ApplicantRoutes;