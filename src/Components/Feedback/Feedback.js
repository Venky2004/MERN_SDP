import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import {Rating} from '@mui/material';
import Box from '@mui/material/Box';
import Navbar from '../../Components/Navbar/Navbar';
function Feedback() {
  const [value, setValue] = React.useState(2);

  return (
    <div> 
      <Navbar/>
    <br/>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }} elevation={24}>
          <CardContent>
            <Typography gutterBottom variant="h4">
              Feedback
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            Give us your suggestions so we can improve our app.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                
                <Grid xs={12} sm={12} item>
                  <TextField placeholder="Enter name" label="Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid>
                <center>
                <Box
      sx={{
        "& > legend": { mt: 2 }
      }}
    >
      <Typography component="legend">Rate Us</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
    </center>
                </Grid>
                
                <Grid item xs={12}>
                  <TextField label="Feedback" multiline rows={4} placeholder="Issue" variant="outlined" fullWidth required/>
                </Grid>    
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>
                <Grid item xs={12}>
                
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Feedback;