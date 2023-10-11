import React, { useState } from 'react'
import { Button } from 'antd'

export default function TodoList() {
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState(['吃饭', '睡觉', '打豆豆'])
  const handleChange = (e: { target: { value: string } }) => {
    setInputValue(e.target.value)
  }
  // 增加
  const handleClick = () => {
    setList([...list, inputValue])
    setInputValue('')
  }
  // 删除
  const handleDelete = (index: number) => {
    const lists: string[] = [...list]
    lists.splice(index, 1)
    setList(lists)
  }
  return (
    <div>
      <h3 className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
        TodoList
      </h3>
      <hr />
      <div className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          style={{ height: '25px' }}
        />
        <div>
          <Button className="left-2" onClick={handleClick}>
            提交
          </Button>
        </div>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <Button className="left-4" onClick={() => handleDelete(index)}>
                删除
              </Button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
