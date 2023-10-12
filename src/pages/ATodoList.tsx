// 使用antd完成TodoList
import React from 'react'
import { Input, Button, List } from 'antd'
// 全局hooks
import { useAppSelector, useAppDispatch } from '../app/hooks'
// redux -> data
import { selectCount, selectInputValue } from '../store/counterSlice'
// redux -> action
import { handleChange, handleClick, handleDelete } from '@store/counterSlice'

export default function ATodoList() {
  // 仓库数据
  const list = useAppSelector(selectCount)
  const inputValue = useAppSelector(selectInputValue)
  /* dispatch */
  const dispatch = useAppDispatch()
  /* 输入值  */
  return (
    <>
      <h3 className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 rounded-full">
        TodoList
      </h3>
      <div className="flex">
        <Input
          style={{ width: 400 }}
          value={inputValue}
          onChange={e => dispatch(handleChange(e.target.value))}
        />
        <Button
          type="primary"
          className="left-4"
          onClick={() => dispatch(handleClick(inputValue))}
        >
          加入
        </Button>
      </div>
      <div className="md:container mt-4 ">
        <List
          size="large"
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item>
              {item}-
              <Button
                className="left-4"
                type="primary"
                danger
                onClick={() => dispatch(handleDelete(index))}
              >
                删除
              </Button>
            </List.Item>
          )}
        />
      </div>
    </>
  )
}
