import { Essay, ArticleCator } from '@/models/Essay.model';
import fetch from '../utils/fetch';

class Article {
  static getDailyRecommendArticle(id: number): FetchResponse<ArticleCator> {
    return fetch.get('/article/today', {id}).catch(err => {
      console.log(err);
    });
  }
  static addArticle(params: {content: string, title: string}): FetchResponse<ArticleCator & Essay> {
    return fetch.put('/article/add', params).catch(err => {
      console.log(err);
    });
  }
  static getArticles(params: {pageSize: number, currentPage: number}): FetchResponseList<Essay> {
    return fetch.get('/article/list', params).catch(err => {
      console.log(err);
    });
  }
  static getArticleById(params: {id: string}): FetchResponse<ArticleCator> {
    return fetch.get('/article/getArticleById', params).catch(err => {
      console.log(err);
    });
  }
}

export default Article;
