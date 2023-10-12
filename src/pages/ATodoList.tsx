// 使用antd完成TodoList
import React from 'react'
import { Input, Button, List } from 'antd'
// 全局hooks
import { useAppSelector } from '../app/hooks'
// redux->data
import { selectCount } from '../store/counterSlice'

export default function ATodoList() {
  const count = useAppSelector(selectCount)
  console.log(count)
  return (
    <>
      <h3 className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 rounded-full">
        TodoList
      </h3>
      <div className="flex">
        <Input style={{ width: 400 }} />
        <Button type="primary" className="left-4">
          加入
        </Button>
      </div>
      <div className="md:container mt-4 ">
        <List
          size="large"
          bordered
          dataSource={count}
          renderItem={item => (
            <List.Item>
              {item}
              <Button className="left-4" type="primary" danger>
                删除
              </Button>
            </List.Item>
          )}
        />
      </div>
    </>
  )
}
