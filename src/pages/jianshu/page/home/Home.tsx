import React from 'react'
// components
import TopNav from '../components/TopNav'
import RightRecommend from '../components/RightRecommend'
import LeftList from '../components/LeftList'
// css
import './index.css'

export default function Home() {
  return (
    <>
      <div className="container">
        <TopNav />
        <div className="main-container" style={{ backgroundColor: 'pink' }}>
          <LeftList />
          <RightRecommend />
        </div>
      </div>
    </>
  )
}
