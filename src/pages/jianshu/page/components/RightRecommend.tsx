import React from 'react'
import topAL from '@/image/ad-ali.jpg'
import topTX from '@/image/ad-tencent.jpg'

export default function RightRecommend() {
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
        <div className="flex">
          <div className="bg-red-500 w-16 h-16 rounded-full m-2">
            <img src="" alt="" />
          </div>
          <div className="text-base">
            <h4 className="text-stone-800">作者</h4>
            <div className="text-neutral-400">
              <p>前端开发深证</p>
              <p>前端领域贡献值</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
