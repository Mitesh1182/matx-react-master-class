import { Box, Button, Card, Container } from '@mui/material'
import { Breadcrumb } from 'app/components'
import React from 'react'
import { useEffect } from 'react'
import { Stack } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getJobrequest } from 'slice/recruiter/createjobslice'
 
 function Listjobs(){
  const {data, isloading, error ,listData} = useSelector((y)=>y.jobs);
  console.log(listData);
     const dis = useDispatch()

    useEffect(()=>{
      dis(getJobrequest())
    },[])


  return (
        <>
    <Container>
      <div>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'ListJobs', path: '/Recruiter' }, { name: 'ListJobs' }]} />
      </Box>
      {data && (
        <ul className='col-sm-4'>
          {
            listData?.map((v) => {
              return (
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                  <Card.Title>{v.title}</Card.Title>
                    <Card.Title>{v.skillsets}</Card.Title>
                    <Card.Title>{v.userId}</Card.Title>
                  
                    <Card.Title>{v.jobType}</Card.Title>
                    <Card.Title>{v.salary}</Card.Title>

                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

              )

            })
          }
        </ul>
      )}
      </div>

</Container>
    </>
  )
}
export default Listjobs


