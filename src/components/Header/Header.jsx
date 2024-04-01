import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
        name: "Sign Up",
        slug: "/signup",
        active: !authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Lost Items",
      slug: "/lost-items",
      active: authStatus,
  },
  {
      name: "Found Items",
      slug: "/found-items",
      active: authStatus,
  },
  {
      name: "Post Item",
      slug: "/post-item",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-black'>
      <Container>
        <nav className='flex'>
          <div className='mr-4 flex'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
            <h2 className="text-white text-3xl font-semibold mb-4">CampusFindDTU</h2>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-block px-6 py-2 duration-200 text-white hover:bg-gray-500 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header