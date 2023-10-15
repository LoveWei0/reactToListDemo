export interface AuthorType {
  username: string
  company: string
  jobTitle: string
}

export interface RecommendationCardType {
  id: string
  description: string
  author: AuthorType
}

export interface RecommendationCardListType {
  recommendationCard: RecommendationCardType[]
}

export interface DataType {
  data: RecommendationCardListType
}
