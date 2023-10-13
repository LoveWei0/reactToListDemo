import React, { useState } from 'react'
// images
import homeImage from '@/image/header-home.png'
// css
import './index.css'

export default function Header() {
  const [inputFocus, setInputFocus] = useState<boolean>(true)
  const searchFocusOrBlur = () => {
    setInputFocus(!inputFocus)
  }
  return (
    <>
      <header>
        <div className="header_left">
          <a href="">
            <img src={homeImage} alt="首页" className="header_left-img" />
          </a>
        </div>
        <div className="header_center">
          <div className="header_center-left">
            <div className="nav-item header_center-left-home">
              <i className="icon icon-home"></i>
              <span>首页</span>
            </div>
            <div className="nav-item header_center-left-download">
              <i className="icon icon-download"></i>
              <span>下载App</span>
            </div>
            <div className="nav-item header_center-left-search">
              <input
                type="text"
                placeholder="搜索"
                className={inputFocus ? 'input-nor-active' : 'input-active'}
                onFocus={searchFocusOrBlur}
                onBlur={searchFocusOrBlur}
              />
              <i
                className={
                  inputFocus
                    ? 'icon icon-search'
                    : 'icon icon-search icon-active'
                }
              ></i>
            </div>
          </div>
          <div className="header_center-right">
            <div className="nav-item header_right-center-setting">
              <span>Aa</span>
            </div>
            <div className="nav-item header_right-center-login">
              <span>登录</span>
            </div>
          </div>
        </div>
        <div className="header_right nav-item">
          <span className="header_right-register">注册</span>
          <span className="header_right-write nav-item">
            <i className="icon icon-write "></i>
            <span>写文章</span>
          </span>
        </div>
      </header>
    </>
  )
}
