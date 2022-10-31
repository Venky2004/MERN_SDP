import React from 'react'
import '../../css/style.css'
import NavBar from './NavBar'
import Weather1 from './Weather1'
// import Farmer from './Farmer'
import './Guest.css'

const Guest = () => {
  return (
            <div className='ripple-background'>
              <NavBar />
  <div className='circle xxlarge shade1'></div>
  <div className='circle xlarge shade2'></div>
  <div className='circle large shade3'></div>
  <div className='circle mediun shade4'></div>
  <div className='circle small shade5'></div>
<Weather1/>
</div>
  )
}

export default Guest