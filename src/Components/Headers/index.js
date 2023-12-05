import React from 'react'
import './style.css'
import git48 from '../../images/git48.svg'
const Header = () => {
  return (

    <div className="header">
      <div className='container header-content'>
        <div className='nav'>

          <ul>
            <li>
              Home
            </li>
            <li>
              File Upload
            </li>
          </ul>
        </div>

        <div>
          <img src={git48} alt="dummy image"/>
        </div>

      </div>

    </div>

  )
}

export default Header 