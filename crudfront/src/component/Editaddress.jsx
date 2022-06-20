import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

export const Editaddress = () => {
  const {id} = useParams()
// const {indexNo}=useParams()
  const [data, setdata]=useState([])
  // const [data1, setdata1]=useState([])
  const [indexNo,setindexNo]=useState(0)
  

  const handlesubmit=()=>
    {
      axios.post( `http://localhost:5000/user/${id}/addresses`, data)
      .then(res => {
        console.log(res);
      //   console.log(res.data);

      })
  }
  // const getdata=()=>
  //   {
  //     axios.get(`http://localhost:5000/user/${id}/addresses` )
  //     .then(res => {
  //       console.log(res);
  //     //   console.log(res.data);
  //     setdata(res.data)
  //     })
  // }
  const handlechange = (e)=>
  {
    const { name, value } = e.target;
  setdata({
    ...data,
    [name]: value,
  });
  }
  return (
    <>
  
       <div>
       House No.   <input type="text" name="house_no"onChange={handlechange} />
       Street   <input type="text" name="street"onChange={handlechange} />
        City <input type="text" name="city"onChange={handlechange} />
     State   <input type="text" name='state' onChange={handlechange} /> 
     <button onClick={handlesubmit}>submit</button>
     </div>
    
   
    </>
    
  )
}
