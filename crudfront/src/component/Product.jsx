import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Product = () => {

    const [pro, setpro]=useState([])
    useEffect(()=>{
       getdata()
    },[])

    const getdata=()=>{
        axios.get("http://localhost:5000/product").then((res)=>{
            console.log(res.data)
            setpro(res.data)
          })
    }

  return (
    <div style={{height:"400px",width:"1000px",display:"flex"}}>
        {pro.map(e=>(
            <div>
            <img src={e.product_img} alt="" style={{width:"50%"}}></img>
            <h3>{e.product_name}</h3>
            </div>
        ))}
    </div>
  )
}
