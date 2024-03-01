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
export const searchgetJobDataSearch = (obj1) => {

    return authFetchGet(`/api/jobs?myjobs=${obj1.pageNumber}&q=${obj1.searchTerm}`, 'GET');
}
// SEARCH job data end ======-------->
// advanced SEARCH job data start ======-------->
export const advancedsearchgetJobDataSearch = (obj) => {
    let url =`/api/jobs?myjobs=${obj.pageNumber}`

    if(obj.jobType.fullTime)
    {
        url = url + "&jobType=" + "Full Time"
    }  
    if(obj.jobType.partTime)
    {
        url = url + "&jobType=" + "Part Time"
    }   
    if(obj.jobType.wfh)
    {
        url = url + "&jobType=" + "Work From Home"
    }    
    if(obj.salary && obj.salary.length> 0)
    {
        if(obj.salary[1]>0){

            url = url + "&salaryMin=" + obj.salary[0]
            url = url + "&salaryMax=" + obj.salary[1]
        }
    }
    if(obj.duration && obj.duration != "0")
    {
        url = url + "&duration=" + obj.duration
    }
    if(obj.sort.salary)
    {
        if(obj.sort.salary.desc)
        {
        url = url + "&desc=" + "salary"
        }
        else
        {
            url = url + "&asc=" + "salary" 
        }
    }

    if(obj.sort.duration)
    {
        if(obj.sort.duration.desc)
        {
        url = url + "&desc=" + "duration"
        }
        else
        {
            url = url + "&asc=" + "duration" 
        }
    }

    if(obj.sort.rating)
    {
        if(obj.sort.rating.desc)
        {
        url = url + "&desc=" + "rating"
        }
        else
        {
            url = url + "&asc=" + "rating" 
        }
    }
    
    return authFetchGet(url, 'GET');
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

// applicant user ======------->

export const applicantusergetData =(data1)=>{
    return authFetchGet('/api/user', 'GET', data1)
}
export const applicantuserputData =(data1)=>{
    return authFetch('/api/user', 'Put', data1)
}

// applicant user ======------->

// View Application start ====------>

export const GetApplicants =(id) =>
{

    return authFetchGet(`/api/applicants?jobId=${id}&desc=dateOfApplication`,'GET')
}

// export const ApplicationPopup = (obj) => {
//     let url =`/api/applicants?jobId=${obj.pageNumber}`

//     if(obj.jobType.fullTime)
//     {
//         url = url + "&jobType=" + "Full Time"
//     }  
//     if(obj.jobType.partTime)
//     {
//         url = url + "&jobType=" + "Part Time"
//     }   
//     if(obj.jobType.wfh)
//     {
//         url = url + "&jobType=" + "Work From Home"
//     }

    
//     return authFetchGet(url, 'GET');
// }
// View Application end ====------>