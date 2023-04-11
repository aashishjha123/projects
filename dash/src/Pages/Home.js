import React from 'react';
import Sidenav from '../Components/Sidenav/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../Components/NavBar/Navbar';
import Grid from '@mui/material/Grid';
import "../Pages/Home.css"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccordianDash from '../Components/AccordianDash';
import Barchart from '../Charts/Barchart';


export default function Home() {
  return (
    <>

      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>

        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>

              <Stack spacing={2} direction='row'>
                <Card sx={{ minWidth: 49 + "%", height: 140 }} className='grad'>

                  <CardContent>

                    <div>

                      <CreditCardIcon />

                    </div>

                    <Typography gutterBottom variant="h5" component="div">
                      $500.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Total Earning
                    </Typography>

                  </CardContent>

                </Card>

                <Card sx={{ minWidth: 49 + "%", height: 140 }} className='grad'>

                  <CardContent>

                    <div>

                      <WorkOutlineIcon />

                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      $900.00
                    </Typography>

                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Total Orders
                    </Typography>

                  </CardContent>

                </Card>

              </Stack>

            </Grid>
            <Grid item xs={4} >
              <Stack spacing={2}>

                <Card sx={{ maxWidth: 345 }}>


                  <Stack spacing={2} direction="row">

                    <div className='iconstyle'>
                      <StorefrontIcon />

                    </div>
                    <div className='paddingall'>
                      <span className='pricetitle'>$203K</span><br></br>
                      <span className='priceshoptitle'>Total Income</span>
                    </div>
                  </Stack>



                </Card>

                <Card sx={{ maxWidth: 345 }}>


                  <Stack spacing={2} direction="row">

                    <div className='iconstyle'>
                      <StorefrontIcon />

                    </div>
                    <div className='paddingall'>
                      <span className='pricetitle'>$203K</span><br></br>
                      <span className='priceshoptitle'>Total Income</span>
                    </div>
                  </Stack>



                </Card>

              </Stack>
            </Grid>

          </Grid>


          <Box height={20} />

          <Grid container spacing={2}>
            <Grid item xs={8} >

              <Card sx={{ height: 60 + "vh" }}>

                <CardContent>

                    <Barchart />
                </CardContent>

              </Card>

            </Grid>
            <Grid item xs={4} >

              <Card sx={{ height: 60 + "vh" }}>

                <CardContent>
                  <div className='paddingall'>
                    <span className='pricetitle'> Popular Products</span><br></br>
                   
                  </div>
                  
                  <AccordianDash />


                </CardContent>

              </Card>
            </Grid>

          </Grid>


        </Box>

      </Box>
    </>
  )
}
