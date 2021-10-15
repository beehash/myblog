export default class ConfigService {
  static tagTypes: {id: number, name: string, path: string}[] = [
    {id:1, name: '推荐', path: '/'},
    {id: 2, name: '文章', path: '/articles'},
    {id: 3, name: '算法', path: '/arithmethics'}, 
    {id: 4, name: '随笔', path: '/essays'}, 
    {id: 5, name: '面试题', path: '/questions'}, 
    {id: 6, name: '笔记', path: '/notes'}, 
    {id: 7, name: '工具', path: '/tools'}
  ];
}