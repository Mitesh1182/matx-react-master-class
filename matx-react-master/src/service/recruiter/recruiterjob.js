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

// update job  start------------
export const getjobupdatedata =(data)=>{
    return authFetchGet('/api/jobs', 'GET', data)
}
export const putjobupdatedata =(data)=>{
    return authFetch('/api/jobs', 'Put', data)
}
// update job  end------------