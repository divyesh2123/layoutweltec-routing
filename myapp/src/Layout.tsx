import React from 'react'
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <MyHeader/>

    <Outlet/>
    <MyFooter/> 
        
    </>
  )
}
