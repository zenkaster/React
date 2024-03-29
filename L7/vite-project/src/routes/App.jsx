import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function App() {
  
  return (
    <div>
      <Link to={'about'}>About</Link><br />
      <Link to={'/'}>Home</Link><br />
      <Link to={'contacts'}>Contacts</Link><br />
      <Link to={'index'}>Index</Link><br />
      <Outlet></Outlet>
    </div>
  )
}
