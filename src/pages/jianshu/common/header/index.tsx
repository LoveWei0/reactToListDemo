import React, { useRef, useEffect } from 'react'
// images
import homeImage from '@/image/header-home.png'
// css
import './index.css'
// 动画库
import { CSSTransition } from 'react-transition-group'
// redux -> data
import {
  searchBlur,
  searchFocus,
  searchMouseEnterHot,
  searchMouseLeaveHot,
  selectInputFocus,
  selectMouseInHot,
  selectList,
  GetHeaderList
} from '@store/headerSlice'
// hooks
import { useAppDispatch, useAppSelector } from '@app/hooks'

export default function Header() {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputFocus = useAppSelector(selectInputFocus)
  const dispatch = useAppDispatch()
  useEffect(() => {
    // const input = inputRef.current
    // if (input) {
    //   input.select()
    // }
  }, [])
  useEffect(() => {
    dispatch(GetHeaderList())
  }, [])
  const lists = useAppSelector(selectList)
  const mouseInHot = useAppSelector(selectMouseInHot)
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
              <CSSTransition
                in={inputFocus}
                timeout={200}
                classNames="slide"
                nodeRef={inputRef}
              >
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="搜索"
                  className={inputFocus ? 'input-active' : 'input-nor-active'}
                  onFocus={() => dispatch(searchFocus())}
                  onBlur={() => dispatch(searchBlur())}
                />
              </CSSTransition>
              <i
                className={
                  inputFocus
                    ? 'icon icon-search'
                    : 'icon icon-search icon-active'
                }
              ></i>
              {/* 热搜模块 */}
              <div
                className={
                  mouseInHot || inputFocus
                    ? 'display-show header_center-left-hot-search'
                    : 'display-hide header_center-left-hot-search'
                }
                onMouseEnter={() => dispatch(searchMouseEnterHot())}
                onMouseLeave={() => dispatch(searchMouseLeaveHot())}
              >
                <div className="header_center-left-hot-search-title">
                  <span>热门搜索</span>
                  <span>
                    <i className="icon-change"></i>
                    <span>换一批</span>
                  </span>
                </div>
                <div className="header_center-left-hot-search-content">
                  {lists.map(item => {
                    return <span key={item}>{item}</span>
                  })}
                </div>
              </div>
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
