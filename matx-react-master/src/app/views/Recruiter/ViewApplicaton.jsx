import React from 'react'
import { Box, Container, Grid , Typography} from '@mui/material'
import { Breadcrumb } from 'app/components'

export default function ViewApplicaton() {
  return (
    <>
    <Container >
         <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Listjobs', path: '/Recruiter/Listjobs' }, { name: 'Appllication' }]} />
      </Box>
      <Grid item >
        <Typography variant="h3" style={{display:'flex', justifyContent:'center'}}>Application</Typography>
      </Grid>
    </Container>
    </>
  )
}
