import { Box, Button, Card, CardActions, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import { Breadcrumb } from 'app/components'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobrequest } from 'slice/recruiter/createjobslice'

const Listjobs = () => {
  const {data, isloading, error } = useSelector((y)=>y.jobs);
  console.log(data);
     const dis = useDispatch()

    useEffect(()=>{
      dis(getJobrequest(1))
    },[])
  return (
    <div>
      <Container>
      <Box className="breadcrumb" >
   <Breadcrumb routeSegments={[{ name: 'Recruiter', path: '/Recruiter' }, { name: 'ListJobs' }]} />
      </Box>
      <Stack spacing={3} >
      <Grid item>
        <Typography variant="h2" style={{display:'flex', justifyContent:'center'}}>Jobs List</Typography>
      </Grid>     
   <>
        {isloading && <div>Loading</div>}
        {error && <div>{error}</div>}
        {data && (
          <ul className='col-sm-4'>
            {
              data.map((v) => {
                return (
                  <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{v._id}</Card.Title>
                    <Card.Title>{v.skillsets}</Card.Title>
                    <Card.Title>{v.userId}</Card.Title>
                    <Card.Title>{v.title}</Card.Title>
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
      </>


      </Stack>
      </Container>
    </div>
  )
}

export default Listjobs;

{/* <Card sx={{ maxWidth: 345 }} >
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Lizard
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">Share</Button>
  <Button size="small">Learn More</Button>
</CardActions>
</Card> */}