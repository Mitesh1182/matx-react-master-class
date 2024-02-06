import { Box, Container, Stack } from '@mui/material'
import { Breadcrumb } from 'app/components'
import React from 'react'

const Profile = () => {
  return (


    <Container>
        <Box className="breadcrumb">
   <Breadcrumb routeSegments={[{ name: 'Recruiter', path: '/Recruiter' }, { name: 'Profile' }]} />
      </Box>
      <Stack spacing={3}>
        
      </Stack>
    </Container>
  
  )
}

export default Profile