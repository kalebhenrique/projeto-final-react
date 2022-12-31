import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export const LayoutNavbar  = () => {
  return (
    <>
        <Header/>
            <Outlet/>
    </>
  )
}
