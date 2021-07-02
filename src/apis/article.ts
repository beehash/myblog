import { Essay, ArticleCator } from '@/models/Essay.model';
import fetch from '../utils/fetch';

class Article {
  static getDailyRecommendArticle(id: number): Promise<Essay> {
    return fetch.get('/api/article/today', {id});
  }
  static addArticle(params: {content: string, title: string}): Promise<ArticleCator & Essay> {
    return fetch.put('/api/article/add', params);
  }
  static getArticles(params: {size: number}): Promise<Essay[]> {
    return fetch.get('/api/article/list', params);
  }
  static getArticleById(params: {id: string}): Promise<ArticleCator> {
    return fetch.get('/api/article/getArticleById', params);
  }
}

export default Article;
