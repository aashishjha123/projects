import React from 'react';
import Sidenav from '../Components/Sidenav/Sidenav';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/NavBar/Navbar'


export default function About() {
  return (
    <>

      <Navbar />
      <Box height={30} />

      <Box sx={{ display: 'flex' }}>

        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About</h1>

        </Box>

      </Box>
    </>
  )
}
