import { Essay, ArticleMode } from '@/models/Essay.model';
import fetch from '../utils/fetch';

class Article {
  static getDailyRecommendArticle(id: number): Promise<Essay> {
    return fetch.get('/api/article/today', {id});
  }
  static addArticle(params: {content: string, title: string}): Promise<ArticleMode & Essay> {
    return fetch.put('/api/article/add', params);
  }
  static getArticles(params: {size: number}): Promise<Essay[]> {
    return fetch.get('/api/article/list', params);
  }
}

export default Article;
