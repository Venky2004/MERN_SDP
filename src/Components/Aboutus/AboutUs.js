import React from 'react'
import NavBar from '../Guest/NavBar';
import ab from './Images/f2.jpg';
import dc from './Images/google.png';
import ef from './Images/facebook.png';
import gh from './Images/instagram.png';
import jk from './Images/twitter.png';
import { Button, Paper } from '@mui/material';


const AboutUs = () => {
    return (
        <div style={{ width: '100%' }}> <NavBar />
            <center><Paper elevation={24} style={{ width: 1200, padding: 10, margin: 30, height: 500 }}>
                <div style={{ textAlign: 'left', marginTop: 40, marginLeft: 100 }}>
                    <h1><u>About Us</u></h1>
                </div>
                <br />
               <div style={{display:"flex"}}>
                <span style={{width:900}}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum nam unde illo voluptatum asperiores laudantium, quae maxime nihil, sapiente nulla doloremque iste? Illum voluptates delectus a itaque, numquam facilis?
                    </p>
                </span>
                <span style={{width:300}}>
                    <img src={ab} alt=""  />
                </span>
               </div>
                <div style={{ textAlign: 'left', marginLeft: 100 }}>
                    <h3><u>Contact Us on</u></h3>
                </div>
                <div style={{ textAlign: 'left', marginTop: 20, marginLeft: 90 }}>
                    <Button size='xs'><img src={dc} alt="" width={20} height={20} /></Button>
                    <Button size='xs'><img src={ef} alt="" width={20} height={20} /></Button>
                    <Button size='xs'><img src={gh} alt="" width={20} height={20} /></Button>
                    <Button size='xs'><img src={jk} alt="" width={20} height={20} /></Button>
                </div>
            </Paper></center>
        </div>
    )
}

export default AboutUs