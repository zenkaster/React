import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <NavLink activeClassName="active" to={'about'}>About</NavLink><br />
            <NavLink activeClassName="active" to={'/'}>Home</NavLink><br />
            <NavLink activeClassName="active" to={'contacts'}>Contacts</NavLink><br />
            <NavLink activeClassName="active" to={'index'}>Index</NavLink><br />
            <Link to={-1}>Back</Link>
            <Link to={1}>Forward</Link>
        </header>
    )
}
