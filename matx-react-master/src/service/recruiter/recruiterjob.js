import authfetch from "service/recruiter/authfetch"

const createjob =(data)=>{
    return authfetch('/api/jobs', 'Post', data)
}

export default createjob;