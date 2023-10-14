import React from 'react'
// component
import Header from './common/header'
// react-router-dom
import { Routes, Route } from 'react-router-dom'
// component
import Home from './page/home/Home'
import Detail from './page/detail/Detail'

export default function CoverShu() {
  return (
    <>
      {/* 头部 */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  )
}
