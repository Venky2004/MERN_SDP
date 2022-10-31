import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Card, Typography} from '@mui/material';
import {Stack} from '@mui/system';
import TitlebarImageList from './TitlebarImageList';
import '../../css/style.css';


export default function DashBoard() {
  return (
    <div>
       <h1>DashBoard</h1>
      <Card sx={{m:3,borderRadius:1}} elevation="24">
       
      <Stack direction="row">
      <Card sx={{height:200,width:400,borderRadius:8,m:5}} elevation='24'>
        <h3>Name</h3>
        <h4><b>Durga Jaya Sai</b></h4>
        <p>Title: Farmer</p>
      </Card>
      <Card sx={{height:200,width:400,borderRadius:8,m:5}} elevation='24'>
        <h3>Crops</h3>
        <h4><b>paddy</b></h4>
        <p>Present cost : 50/kg</p>
      </Card>
      <Card sx={{height:200,width:400,borderRadius:8, m:5}} elevation='24'>
        <h3>The Corps you cultivating This year</h3>
        <h4><b>Paddy</b></h4>
        <p>Days left to harvest: 180 day</p>
      </Card>
      <Card sx={{height:200,width:400,borderRadius:8, m:5}} elevation='24'>
        <h3>Second crop</h3>
        <h4><b>Mirchi</b></h4>
        <p>Days left to harvest: 120 day</p>
      </Card>
      </Stack>
      </Card>
      <center>
        <Card sx={{m:4,borderRadius:5}}>
          <h1>Our Recent Works</h1>
         <TitlebarImageList/>
        </Card>
        <Card sx={{border:"2px solid green",borderRadius:4,m:5}} elevation='2'>
        <Typography variant='h4' align='left'>&nbsp;Recently Added Crops</Typography>
        <TitlebarImageList/>
    </Card>
    </center>
    </div>
  );
}