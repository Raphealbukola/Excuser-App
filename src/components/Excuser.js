import React, {useState} from 'react'
import axios from "axios"
import { Button } from 'bootstrap'
function Excuser() {
  const [excuser, setexcuser] = useState([]) 
  const familyUrl ="https://excuser.herokuapp.com/v1/excuse/family"
   const OfficeUrl = "https://excuser.herokuapp.com/v1/excuse/office"
   const childrenUrl = "https://excuser.herokuapp.com/v1/excuse/children"
   const collegeUrl = "https://excuser.herokuapp.com/v1/excuse/college"
   const partyUrl = "https://excuser.herokuapp.com/v1/excuse/party"
  const getFamily = ()=>{
 axios.get(familyUrl).then((result)=>{
    setexcuser(result.data)
    console.log(result.data);
 })
  }  
  const getoffice = ()=>{
 axios.get(OfficeUrl).then((result)=>{
    setexcuser(result.data)
    console.log(result.data);
 })
  }  
 const getChildren =()=>{
    axios.get(childrenUrl).then((result)=>{
        setexcuser(result.data)
        console.log(result.data);
     })
 } 
 const getCollege=()=>{
    axios.get(collegeUrl).then((result)=>{
        setexcuser(result.data)
        console.log(result.data);
     })
 } 
 const getparty=()=>{
    axios.get(partyUrl).then((result)=>{
        setexcuser(result.data)
        console.log(result.data);
     })
 } 
  return (
    <>
<section className='py-5'>
<div className='container-fluid bg-light py-4 shadow col-lg-5 '>
    <p className='text-center h3 mb-4'>Excuse to all Question</p>
<div className='' id='bt'>
<button className='btn btn1 col-lg-2 p-2 ' onClick={getFamily}>Family</button>
<button className='btn btn2 col-lg-2 p-2' onClick={getoffice}>Office</button>
<button className='btn btn3 col-lg-2 p-2' onClick={getChildren}>Children</button>
<button className='btn btn4 col-lg-2 p-2' onClick={getCollege} >College</button>
<button className='btn btn5 col-lg-2 p-2' onClick={getparty} >Party</button>
</div>
</div>


{excuser.map((user)=>(
            <>
             <div key={user.id} className='col-lg-4 col-sm-11 text-center mt-5 bg-light  h1 my shadow mx-auto'>
             <div>{user.excuse}</div>

             </div>
            </>
        ))}
</section>
    </>


  )
}

export default Excuser