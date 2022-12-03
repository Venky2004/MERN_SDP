import React from 'react'
import { Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Apple from './paddy.jpg';
import { useNavigate } from "react-router-dom";


const Product = (props) => {
    const navigate=useNavigate(false);
    return (
    <Card sx={{ width:250, height: 350 }} elevation={10} onClick={(props) => {
        navigate("/ProductDetails")}}>
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
                    <p>quantity: {props.quantity}</p>
                    <p>price: {props.price}</p>
                    <p>deliver status: {props.deliverable}</p>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Product