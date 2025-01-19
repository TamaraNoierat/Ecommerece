import React from 'react'
import Customnavbar from '../components/user/navbar/navbar'
import { Outlet } from 'react-router-dom';

export default function () {
  return (
    <>
       < Customnavbar />
       <Outlet />
       

    </>
  )
}
