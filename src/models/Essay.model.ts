export interface Essay {
  id: number;
  essayId: string;
  essayTag: string;
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
export const tagTypes = ['文章', '算法', '随笔', '面试题', '笔记', '工具'];
export interface ArticleCator {
  id: number;
  essayId: string;
  content: string;
  title: string;
}