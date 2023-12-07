import React, { useEffect, useState } from 'react'
import './style.css'
import { Router } from 'react-router-dom';

const Link = ({ to, children }) => (
  <a
    href={to}
    onClick={(e) => {
      e.preventDefault();
      Router.navigate(to); // Assuming router.navigate handles navigation
    }}
  >
    {children}
  </a>
);


const Header = () => {
  const [activePath, setActivePath] = useState()

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePath(currentPath)
  }, [])

  console.log("activePath", activePath)

  return (

    <div className="header">
      <div className='container header-content'>
        <div className='nav'>
          <ul>
            <li className={activePath === '/' ? 'active' : ''}>
                <a href='/'>Home</a>
            </li>
            <li className={activePath === '/blog' ? 'active' : ''}>
              <a href="/blog">Blog</a>
            </li>
            <li className={activePath === '/project' ? 'active' : ''}>
               <a href="/project">Project</a>
            </li>
          </ul>
        </div>

        {/* <div>
          <img src={git48} alt="dummy image"/>
        </div> */}

      </div>

    </div>

  )
}

export default Header 