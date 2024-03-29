import React from 'react'
import { Outlet,Link } from 'react-router-dom'

export default function Index() {
    return (
        <div>
            Index
            <Link to={'cabinet'}>Cabinet</Link>
            <Link to={'cart'}>Cart</Link>
            <Outlet></Outlet>
        </div>
    )
}
