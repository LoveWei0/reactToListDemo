import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { getLeftListData, selectLeftList } from '@store/leftListSlice'
// react-router-dom
import { Link } from 'react-router-dom'

export default function LeftList() {
  const dispatch = useAppDispatch()
  const leftListData = useAppSelector(selectLeftList)
  console.log(leftListData)
  useEffect(() => {
    dispatch(getLeftListData())
  }, [])
  return (
    <>
      <div className="left-list">
        <div className="left-list-top">
          <ul className="left-list-top-left">
            <li className="active">
              <Link to="hot">热门</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="new">最新</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="comment">评论</Link>
            </li>
          </ul>
          <ul className="left-list-top-right">
            <li>
              <Link to="hotTheWeek">本周最热</Link>
            </li>
            ·
            <li>
              <Link to="hotTheMonth">本月最热</Link>
            </li>
            ·
            <li>
              <Link to="hotInHistory">历史最热</Link>
            </li>
          </ul>
        </div>
        <div className="left-list-container  mt-4 ml-4 h-full">
          {leftListData.map(item => {
            return (
              <>
                <div className="left-list-item-tag mt-2" key={item.id}>
                  <span className="hot">热</span> ·
                  <span className="special">专栏</span> ·
                  <span>{item.user.username}</span> ·<span>一天前</span> ·
                  <span>{item.category.name}</span>
                </div>
                <h3 className="my-2 text-fuchsia-900">{item.title}</h3>
                <div className="left-list-item-interactive">
                  <span>{item.likeCount}</span>
                  <span>{item.commentsCount}</span>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
