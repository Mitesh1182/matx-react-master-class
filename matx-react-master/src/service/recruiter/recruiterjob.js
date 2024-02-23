import authFetch, { authFetchGet } from "service/recruiter/authfetch";

const createjobAPI =(data)=>{
    return authFetch('/api/jobs', 'Post', data)
}
export default createjobAPI;
export const getjobData =(pageId)=>{
    return authFetchGet(`/api/jobs?myjobs${pageId}`, 'GET',{})
}
export const userData =(data1)=>{
    return authFetch('/api/user', 'Put', data1)
}
export const usergetData =(data1)=>{
    return authFetchGet('/api/user', 'GET', data1)
}

// DELETE job data start ======-------->
export const deletejobData =(id)=>{
    return authFetchGet(`/api/jobs/${id}`, 'DELETE')
}
// DELETE job data end ======-------->
// SEARCH job data start ======-------->
export const searchgetJobDataSearch = (obj) => {

    return authFetchGet(`/api/jobs?myjobs=${obj.pageNumber}&q=${obj.searchTerm}`, 'GET');
}
// SEARCH job data end ======-------->
// advanced SEARCH job data start ======-------->
export const advancedsearchgetJobDataSearch = (obj) => {
//  let url = `/api/jobs?myjobs=${obj.pageNumber}`
//  if(obj.jobtype)
//  {
//     url = url + '&jobtype' + obj.jobtype
//  }
    return authFetchGet(`/api/jobs?myjobs=${obj.pageNumber}&jobType=${obj.searchOptions.jobType.fullTime}&salary=${obj.searchOptions.salary}&duration=${obj.searchOptions.duration}&asc=${obj.searchOptions.sort.salary}`, 'GET', obj);
}
// advanced SEARCH job data end ======-------->

// update job  start------------
export const getjobupdatedata =(data)=>{
    return authFetchGet('/api/jobs/'+data, 'GET')
}
export const putjobupdatedata =(data)=>{
    return authFetch(`/api/jobs/${data._id}`, 'Put', data)
}
// update job  end------------