import React, { useEffect } from 'react'
import topAL from '@/image/ad-ali.jpg'
import topTX from '@/image/ad-tencent.jpg'
// hooks
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectRecommendList, getRightListData } from '@/store/rightListSlice'

export default function RightRecommend() {
  const dispatch = useAppDispatch()
  const recommendList = useAppSelector(selectRecommendList)
  console.log(recommendList)
  useEffect(() => {
    dispatch(getRightListData())
  }, [])
  return (
    <>
      <div className="right-recommend">
        <p>
          <img src={topAL} alt="阿里云" className="h-12" />
          <img src={topTX} alt="腾讯云" className="my-4 h-12" />
        </p>
        <div>
          <h4 className="pl-2 right-recommend-border">掘金优秀作者</h4>
        </div>
        <div>
          {recommendList.map(item => {
            return (
              <>
                <div className="flex my-2">
                  <div className="bg-red-500 w-16 h-16 rounded-full m-2">
                    <img src="" alt="" />
                  </div>
                  <div className="text-base w-42">
                    <h4 className="text-stone-800">{item.author.username}</h4>
                    <div className="text-neutral-400">
                      <p className="text-ellipsis overflow-hidden">
                        {item.author.jobTitle}
                      </p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
