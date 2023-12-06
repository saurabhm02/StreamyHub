import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import MainContainer from '../mainContainer/MainContainer'

const Body = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <MainContainer/>
    </div>
  )
}

export default Body