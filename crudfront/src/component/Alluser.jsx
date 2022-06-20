import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
export const Alluser = () => {
    const [data, setdata]=useState([])
   

    useEffect(()=>{
       getdata()
    },[])

    const getdata=()=>{
        axios.get("http://localhost:5000/user").then((res)=>{
            console.log(res.data)
            setdata(res.data)
          })
    }
    
  return (
    <div>
        <table style={{"border":"1px solid black"}}>
           <th>firstname</th>
           <th>lastname</th>
           <th>mobile</th>
           <th>email</th>
           <th>address</th>
       </table>
   {data.map(e=>(
    <tbody >

           <td>{e.first_name}</td>
           <td>{e.last_name}</td>
           <td>{e.mobile}</td>
           <td>{e.email}</td>
       
         {e.address.map((el,i)=>(
             <td>
       <li>house no. {el.house_no}</li>
      <li>street {el.street}</li>
       <li>City {el.city}</li>
       <li>State {el.state}</li>
      
      
       </td>
          ))}
        <Link to={`/editaddress/${e._id}`}><button  >Add Address</button></Link>
          </tbody>
      
   ))}
    </div>
  )
}
// import React from 'react'
// import {useState,useEffect} from 'react';
// // import './App.css';
// import axios from 'axios';

// function Alluser() {
//     let url="http://localhost:5000/user"
//     const [Data,setData]=useState([])

//     useEffect(()=>{
//         getProducts()

// },[])
// async function getProducts() {
//     await fetch(url)
//     .then(response => response.json())
//     .then(response=>{
//         setData({products:response.result})
//       console.log(response.result);
// console.log("Data-",Data)  
//     })
// }
//   return (
// <div className="grid">
//   {
//     Data.map(function(e){
//   return (
//     <div>
//     <div className="">
//       <img src={e.url}/>
//     </div>
//       <div>
//         HELLO
//       </div>
//       </div>
//   )
//   } )}
// </div>
    
//   );
// }

// export default Alluser;






