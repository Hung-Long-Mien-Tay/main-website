import React, { Children } from 'react'
import NavBar from '../components/NavBarDark'

const MainLayout = ({children}) => {
  return (
    <div>
        <NavBar />
        <div>
            {children}
        </div>
    </div>
  )
}

export default MainLayout