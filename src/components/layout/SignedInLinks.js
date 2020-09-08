import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedInLinks() {
    return (
        <ul className="right">
            <li><NavLink to="/">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating blue lighten-1">SA</NavLink></li>
        </ul>
    )
}
