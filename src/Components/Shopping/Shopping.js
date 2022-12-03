import React from 'react'
import Product from './Product'
import { useState,useEffect } from 'react'
import axios from 'axios'
import ab from './pimages/apple.jpg';
import ma from './pimages/grapes.jpg';
import man from './pimages/mango.jpg';
import or from './pimages/orange.jpg';
import ladyfinger from './pimages/ladyfinger.jpg';
import ridge from './pimages/ridge.jpg';
import redl from './pimages/redlentils.jpg';
import barley from './pimages/barley.jpg';
import bengal from './pimages/bengal.jpg';
import chole from './pimages/chole.jpg';
import millet from './pimages/millet.jpg';
import unknown from './pimages/unknown.jpg';
import moong from './pimages/moong.jpg';
import po from './pimages/potato.jpg';
import pome from './pimages/promo.jpg'
import ce from './pimages/tomato.jpg';
import fg from './pimages/brownrice.jpg';
import hj from './pimages/paddy.jpg';
import zx from './pimages/crab.jpg';
import fish from './pimages/fish.jpg';
import prawm from './pimages/prawns.jpeg';
import prom from './pimages/pomfret.jpg';


const Shopping = () => {
    const [productList,setproductlist]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:2000/api/products").then((response)=>{
          setproductlist(response.data);
          console.log(productList)
        })
      },[]);
    return (
        <div>
        <div style={{ margin: 10, paddingLeft: 5 }}>

                <h1 style={{ padding: 15 ,color:"white"}}>Fruits</h1>
                <ul style={{display:"flex",width:1100,overflowX:"auto"}}>
                         {productList.map((val,key)=>{
                        if(val.category==="Fruits" && val.pname==='Grapes')
                        {return(<li style={{margin:15}}><Product key={key} img={`${ma}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Fruits" && val.pname==='Orange')
                        {return(<li style={{margin:15}}><Product key={key} img={`${or}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Fruits" && val.pname==='Apple')
                        {return(<li style={{margin:15}}><Product key={key} img={`${ab}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Fruits" && val.pname==='Mango')
                        {return(<li style={{margin:15}}><Product key={key} img={`${man}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Fruits" && val.pname==='Pomegranate')
                        {return(<li style={{margin:15}}><Product key={key} img={`${pome}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        })}
                </ul>
                <br />
                <hr />
                <br />
                <h1 style={{ padding: 15 ,color:"white"}}>Vegetables</h1>
                <ul style={{display:"flex",width:1100,overflowX:"auto"}}>
                    {productList.map((val,key)=>{
                        if(val.category==="Vegetables" && val.pname==="LadyFinger")
                        {return(<li style={{margin:15}}><Product key={key} img={`${ladyfinger}`} pname={val.pname} quantity={val.quantity} price={val.price} deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Vegetables" && val.pname==="Tomato")
                        {return(<li style={{margin:15}}><Product key={key} img={`${ce}`} pname={val.pname} quantity={val.quantity} price={val.price} deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description} /></li>);}
                        if(val.category==="Vegetables" && val.pname==="Ridge Gourd")
                        {return(<li style={{margin:15}}><Product key={key} img={`${ridge}`} pname={val.pname} quantity={val.quantity} price={val.price} deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Vegetables" && val.pname==="Potato")
                        {return(<li style={{margin:15}}><Product key={key} img={`${po}`} pname={val.pname} quantity={val.quantity} price={val.price} deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                     else if(val.category==="Vegetables")
                        {return(<li style={{margin:15}}><Product key={key} img={`${unknown}`} pname={val.pname} quantity={val.quantity} price={val.price} deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        })}
                </ul>
                <br />
                <hr />
                <br />
                <h1 style={{ padding: 15 ,color:"white"}}>Pulses</h1>
                <ul style={{display:"flex",width:1100,overflowX:"auto"}}>
                    {productList.map((val,key)=>{
                        if(val.category==="Pulses" && val.pname==="RedLentils")
                        {return(<li style={{margin:15}}><Product key={key} img={`${redl}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Pulses" && val.pname==="Moong Dal")
                        {return(<li style={{margin:15}}><Product key={key} img={`${moong}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Pulses" && (val.pname==="ChickPeas" || val.pname==='Chole' ))
                        {return(<li style={{margin:15}}><Product key={key} img={`${chole}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Pulses" && val.pname==="BengalGram")
                        {return(<li style={{margin:15}}><Product key={key} img={`${bengal}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        else if(val.category==="Pulses")
                        {return(<li style={{margin:15}}><Product key={key} img={`${unknown}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                         })}
                         
                </ul>
                <br />
                <hr />
                <br />
                <h1 style={{ padding: 15,color:"white" }} >Grains</h1>
                <ul style={{display:"flex",width:1100,overflowX:"auto"}}>
                    {productList.map((val,key)=>{
                        if(val.category==="Grains" && val.pname==="Paddy")
                        {return(<li style={{margin:15}}><Product key={key} img={`${hj}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Grains" && val.pname==="Millet")
                        {return(<li style={{margin:15}}><Product key={key} img={`${millet}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Grains" && val.pname==="Barley")
                        {return(<li style={{margin:15}}><Product key={key} img={`${barley}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Grains" && val.pname==="BrownRice")
                        {return(<li style={{margin:15}}><Product key={key} img={`${fg}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                       else  if(val.category==="Grains")
                        {return(<li style={{margin:15}}><Product key={key} img={`${unknown}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        })}
                </ul>
                <br />
                <hr />
                <br />
                <h1 style={{ padding: 15,color:"white" }} >Aqua Products</h1>
                <ul style={{display:"flex",width:1100,overflowX:"auto"}}>
                    {productList.map((val,key)=>{
                        if(val.category==="Aqua Products" && val.pname==="Crab")
                        {return(<li style={{margin:15}}><Product key={key} img={`${zx}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Aqua Products" && val.pname==="Fish")
                        {return(<li style={{margin:15}}><Product key={key} img={`${fish}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Aqua Products" && val.pname==="Prawns")
                        {return(<li style={{margin:15}}><Product key={key} img={`${prawm}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        if(val.category==="Aqua Products" && val.pname==="Pomfret")
                        {return(<li style={{margin:15}}><Product key={key} img={`${prom}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        else if(val.category==="Aqua Products")
                        {return(<li style={{margin:15}}><Product key={key} img={`${unknown}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}
                        })}
                </ul>
                <br />
                <hr />
            </div>
        </div>
    )
}

export default Shopping