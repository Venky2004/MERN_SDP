import React from 'react'
import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Apple from './paddy.jpg';
import { useNavigate } from "react-router-dom";
import './Product.css'


const Product = (props) => {
    const navigate=useNavigate(false);
    return (

        <div class="flip-card">
  <div class="flip-card-inner">
  <Card sx={{ width:250, height: 350 }} elevation={10} className="flip-card-front">
            <CardActionArea>
                <center>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={props.img}
                        alt=""
                        sx={{ width: 250, height:180}} />
                </center>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.pname}
                    </Typography>
                    <p>quantity(in KGs): {props.quantity}</p>
                    <p>price per Kg: ₹{props.price}</p>
                    <p>deliver status: {props.deliverable}</p>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ width:250, height: 350 }} elevation={10} className="flip-card-back">
            <CardActionArea>
                <CardContent>
                    <h3><b>Farmer:</b> {props.fname}</h3>
                    <br/>
                    <p><b>Address:</b> {props.address}</p>
                    <br/>
                    <p><b>Phone Number:</b> {props.phone}</p>
                    <br/>
                    <p><b>Description:</b> {props.des}</p>
                </CardContent>
            </CardActionArea>
        </Card>
  </div>
</div>

    )
}

export default Product