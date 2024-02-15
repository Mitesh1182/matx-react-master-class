import authfetch, { authFetchGet } from "service/recruiter/authfetch"

const createjobAPI =(data)=>{
    return authfetch('/api/jobs', 'Post', data)
}
export default createjobAPI;
export const getjobData =(pageId)=>{
    return authFetchGet(`/api/jobs?myjobs${pageId}`, 'GET',{})
}
export const userData =(data1)=>{
    return authfetch('/api/user', 'Put', data1)
}