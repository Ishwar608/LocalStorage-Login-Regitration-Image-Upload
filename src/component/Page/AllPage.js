import React from 'react'
import StudentInfo from '../StudentInfo/StudentInfo'
import Home from './Home'
import Login from './Login'
import Regitration from './Regitration'
import UploadImage from './UploadImage'
export default function AllPage({setLgdata}) {
  let routes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login setLgdata={setLgdata}/>
    },
    {
        path:'/regi',
        element:<Regitration/>
    },
    {
        path:'/stuInfo',
        element:<StudentInfo/>
    },
    {
        path:'/uploadImg',
        element:<UploadImage/>
    },
  ]
  return routes;
}
