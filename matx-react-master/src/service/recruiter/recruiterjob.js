import authfetch, { authFetchGet } from "service/recruiter/authfetch"

const createjob =(data)=>{
    return authfetch('/api/jobs', 'Post', data)
}
export const getjobData =(pageId)=>{
    return authFetchGet(`/api/jobs?myjobs${pageId}`, 'GET',{})
}
export default createjob;