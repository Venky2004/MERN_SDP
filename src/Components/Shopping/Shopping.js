import React from 'react'
import Product from './Product'
import './Shopping.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
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
import SearchBar from './SearchBar';
import { Radio } from '@mui/material'


const Shopping = () => {
    const [productList,setproductlist]=useState([]);
    const [data,setdata]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:2000/api/products").then((response)=>{
          setproductlist(response.data);
          setdata(response.data);
          console.log(productList)
        })
      },[]);

      const filterResult=(cat)=>{
        if(cat==='all'){
            setdata(productList);
        }
        else{
        const result=productList.filter((curData)=>{
            return curData.category===cat;
        })
    setdata(result)}
      }
      const filterResults=(cat)=>{
        const result=data.filter((curData)=>{
            return curData.deliverable===cat;
        })
    setdata(result)
      }
    return (
       <div className='row mt-5'>
        <div className='col-md-3'  style={{backgroundColor:'white'}}>
            <br/>
            <h3>Search</h3>
            <SearchBar placeholder="Enter Product Name" data={productList} />
            <h3>Filters</h3>
            <div>
                <h5>Category</h5>
               <div className='row'>
                <div className='col-md-1'>
                    <Button onClick={()=>filterResult('Fruits')}>Fruits</Button>
                    <Button onClick={()=>filterResult('Pulses')}>Pulses</Button>
                    <Button onClick={()=>filterResult('Grains')}>Grains</Button>
                    <Button onClick={()=>filterResult('Vegetables')}>Vegetables</Button>
                    <Button onClick={()=>filterResult('Aqua Products')}>Aqua Products</Button>
                    <Button onClick={()=>filterResult('all')}>ALL</Button>
                </div>
               </div>
               <div>
               <h5>Deliverable</h5>
              <Button onClick={()=>filterResults('Yes')}>Yes</Button>
                    </div>
            </div>
            </div>
        <div className='col-md-8 row' style={{backgroundColor:'white'}}>
        <br />
        {data.map((val,key)=>{{return(<li style={{margin:25}} className="col-md-3"><Product key={key} img={`${ma}`} pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}})}
        </div>
       </div>
    )
}

export default Shopping