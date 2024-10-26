import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function MyHeader() {
  return (
    <ul>

    <li>
    <Link to='/login'>Login</Link>

    </li>  

    <li>
          <NavLink
            to="/registration"
            style={({ isActive }) =>
              isActive
                ? {
                    color: '#fff',
                    background: '#7600dc',
                  }
                : { color: '#545e6f', background: 'red' }
            }
          >MyPage
            </NavLink>
          </li>

    </ul>
  )
}
