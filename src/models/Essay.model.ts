export interface Essay {
  id: number;
  articleId: string;
  articleTag: string;
  title: string;
  summary: string;
  createTime: string;
  publishTime: string;
  status: number;
  author: string;
  browser: number;
  like: number;
  currentLikeStatus: boolean;
  liker: string;
}
export interface ArticleCator {
  id: number;
  essayId: string;
  content: string;
  title: string;
}