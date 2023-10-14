import React from 'react'
// react-router-dom
import { Link } from 'react-router-dom'

export default function TopNav() {
  return (
    <>
      <div className="top-nav">
        <ul className="top-nav-list">
          <li className="top-nav-list-item active">
            <Link to="recommend">推荐</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="attention">关注</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="afterEnd">后端</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="beforeEnd">前端</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="android">Android</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="ios">IOS</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="ai">人工智能</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="developmentTool">开发工具</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="codeLife">代码人生</Link>
          </li>
          <li className="top-nav-list-item">
            <Link to="read">阅读</Link>
          </li>
          <li className="top-nav-list-item top-nav-list-right">
            <Link to="labelManagement">标签管理</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
