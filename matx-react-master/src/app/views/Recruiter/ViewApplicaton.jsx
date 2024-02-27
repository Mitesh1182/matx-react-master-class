import React from 'react'
import { Box, Container, Grid , Typography} from '@mui/material'
import { Breadcrumb } from 'app/components'
import { useSearchParams } from 'react-router-dom'

export default function ViewApplicaton() {

  const[val]=useSearchParams()
  console.log(val)
  return (
    <>
    <Container >
         <Box style={{marginTop:"15px"}} className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Listjobs', path: '/Recruiter/Listjobs' }, { name: 'Appllication' }]} />
      </Box>
      <Grid item >
        <Typography variant="h4" style={{display:'flex', justifyContent:'center'}}>Application</Typography>
      </Grid>
      
    </Container>
    </>
  )
}
