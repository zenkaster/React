import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function App() {

  return (
    <div>
      {/* <header>
        <NavLink activeClassName="active" to={'about'}>About</NavLink><br />
        <NavLink activeClassName="active" to={'/'}>Home</NavLink><br />
        <NavLink activeClassName="active" to={'contacts'}>Contacts</NavLink><br />
        <NavLink activeClassName="active" to={'index'}>Index</NavLink><br />
      </header> */}

      <Header />
      <Outlet></Outlet>
      <Footer />
      {/* <footer>
        Какой то футер
      </footer> */}
    </div>
  )
}
