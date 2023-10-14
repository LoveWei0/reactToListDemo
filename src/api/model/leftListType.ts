export interface categoryType {
  name: string
  id: string
}

export interface userType {
  id: string
  username: string
  avatarLarge: string
}

export interface ReqLeftList {
  id: string
  title: string
  category: categoryType
  user: userType
  likeCount: number
  commentsCount: number
}

export interface ReqLeftListData {
  articleFeed: ReqLeftList[]
}

export interface ReqData {
  data: ReqLeftListData
}
