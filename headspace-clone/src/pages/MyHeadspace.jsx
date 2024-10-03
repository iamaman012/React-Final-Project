import React from 'react'
import MyHeadspaceNav from '../components/myHeadspace/MyHeadspaceNav'

import HeadspaceTop from '../components/myHeadspace/HeadspaceTop'
import "../components/myHeadspace/MyHeadspace.css"
import HeadspaceContent from '../components/myHeadspace/HeadspaceContent'
import BottomNav from '../components/myHeadspace/BottomNav'

const MyHeadspace = ({title}) => {
  return (
    <>
    <MyHeadspaceNav/>
    <div className="headspace-content-container">
      <div className="headspace-content-item">
        <p className="topitem-head">{title}</p>
        <HeadspaceTop/>
        <HeadspaceContent/>
      </div>
    </div>
    <BottomNav/>
    </>
  )
}

export default MyHeadspace