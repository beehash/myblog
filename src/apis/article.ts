import { Essay } from '@/models/Essay.model';
import fetch from '../utils/fetch';

class Article {
  static getDailyRecommendArticle(id: number): Promise<Essay> {
    return fetch.get('/api/article/today', {id});
  }
}

export default Article;
