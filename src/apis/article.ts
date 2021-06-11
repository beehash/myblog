import { Essay } from '@/models/Essay.model';
import fetch from '../utils/fetch';

class Article {
  static getDailyRecommendArticle(id: number): Promise<Essay> {
    return fetch.get('/api/article/today', {id});
  }
  static addArticle(params: {content: string, title: string}): Promise<Article> {
    return fetch.put('/api/article/add', params);
  }
}

export default Article;
