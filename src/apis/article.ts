import { Essay, ArticleCator } from '@/models/Essay.model';
import fetch from '../utils/fetch';

class Article {
  static getDailyRecommendArticle(id: number): Promise<ArticleCator> {
    return fetch.get('/article/today', {id}).catch(err => {
      console.log(err);
    });
  }
  static addArticle(params: {content: string, title: string}): Promise<ArticleCator & Essay> {
    return fetch.put('/article/add', params).catch(err => {
      console.log(err);
    });
  }
  static getArticles(params: {pageSize: number, currentPage: number}): Promise<Essay[]> {
    return fetch.get('/article/list', params).catch(err => {
      console.log(err);
    });
  }
  static getArticleById(params: {id: string}): Promise<ArticleCator> {
    return fetch.get('/article/getArticleById', params).catch(err => {
      console.log(err);
    });
  }
}

export default Article;
