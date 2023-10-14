import React from 'react'
// component
import Header from './common/header'
// react-router-dom
import { Routes, Route } from 'react-router-dom'

export default function CoverShu() {
  return (
    <>
      {/* 头部 */}
      <Header />
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/detail" element={<div>details</div>} />
      </Routes>
    </>
  )
}
