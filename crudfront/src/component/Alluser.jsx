// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// export const Alluser = () => {
//     const [data, setdata]=useState([])
//     useEffect(()=>{
//        getdata()
//     },[])

//     const getdata=()=>{
//         axios.get("http://localhost:5000/user").then((res)=>{
//             console.log(res.data)
//             setdata([res.data])
//           })
//     }
//   return (
//     <div>

//     </div>
//   )
// }
import React from 'react'
import {useState,useEffect} from 'react';
// import './App.css';
import axios from 'axios';

function Alluser() {
    let url="https://api.thecatapi.com/v1/images/search?limit=25&page=1&order=Desc"
    const [Data,setData]=useState([])

    useEffect(()=>{
      axios.get(url).then((res)=>{
        console.log(res.data)
        setData(res.data)
      })
    

},[])

console.log("Data-",Data)  

  return (
<div className="grid">
  {
    Data.map(function(e){
  return (
    <div>
    <div className="">
      <img src={e.url}/>
    </div>
      <div>
        HELLO
      </div>
      </div>
  )
  } )}
</div>
    
  );
}

export default Alluser;






