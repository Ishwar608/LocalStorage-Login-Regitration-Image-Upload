import React, { useEffect, useState } from 'react'
import Welcome from '../Image/Welcome.png'
import ImageGallary from './ImageGallary';


export default function Home() {
  const [imageList,setImage] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem('IMAGE') != null){
      setImage(JSON.parse(localStorage.getItem('IMAGE')))
    }
  },[])
  console.log(imageList);
  return (
    <div 
    style={{
      display : 'flex',
      alignItems :'center',
      justifyContent : 'center',
      marginTop : "5%"
    }}
    >
     {
      imageList.length > -1 ? 
      imageList.map((ele)=>{
        return(<ImageGallary img={ele} />)
      })
      : <img src={Welcome} width="80%"/>
     }
    </div>
  )
}
