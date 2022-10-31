import React from 'react'
import Product from './Product'
import { useState,useEffect } from 'react'
import axios from 'axios'
import ab from './pimages/apple.jpg';
import ce from './pimages/tomato.jpg';
import fg from './pimages/bengal.jpg';
import hj from './pimages/paddy.jpg';
import zx from './pimages/crab.jpg';


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
                        if(val.category==="Fruits")
                        {return(<li style={{margin:15}}><Product key={key} img={`${ab}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} /></li>);}})}
                </ul>
                <br />
                <hr />
                <br />
                <h1 style={{ padding: 15 ,color:"white"}}>Vegetables</h1>
                <ul style={{display:"flex",width:1100,overflowX:"auto"}}>
                    {productList.map((val,key)=>{
                        if(val.category==="Vegetables")
                        {return(<li style={{margin:15}}><Product key={key} img={`${ce}`} pname={val.pname} quantity={val.quantity} price={val.price} deliverable={val.deliverable} /></li>);}})}
                </ul>
                <br />
                <hr />
                <br />
                <h1 style={{ padding: 15 ,color:"white"}}>Pulses</h1>
                <ul style={{display:"flex",width:1100,overflowX:"auto"}}>
                    {productList.map((val,key)=>{
                        if(val.category==="Pulses")
                        {return(<li style={{margin:15}}><Product key={key} img={`${fg}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} /></li>);}})}
                </ul>
                <br />
                <hr />
                <br />
                <h1 style={{ padding: 15,color:"white" }} >Grains</h1>
                <ul style={{display:"flex",width:1100,overflowX:"auto"}}>
                    {productList.map((val,key)=>{
                        if(val.category==="Grains")
                        {return(<li style={{margin:15}}><Product key={key} img={`${hj}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} /></li>);}})}
                </ul>
                <br />
                <hr />
                <br />
                <h1 style={{ padding: 15,color:"white" }} >Aqua Products</h1>
                <ul style={{display:"flex",width:1100,overflowX:"auto"}}>
                    {productList.map((val,key)=>{
                        if(val.category==="Aqua Products")
                        {return(<li style={{margin:15}}><Product key={key} img={`${zx}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} /></li>);}})}
                </ul>
                <br />
                <hr />
            </div>
        </div>
    )
}

export default Shopping