interface articleType {
  id: number;
  name: string;
}
interface tagType extends articleType{
  path: string;
}
export default class ConfigService {
  static tagType: tagType[] = [
    {id: 1, name: '推荐', path: '/'},
    {id: 2, name: '文章', path: '/articles'},
    {id: 3, name: '算法', path: '/arithmethics'}, 
    {id: 4, name: '随笔', path: '/essays'}, 
    {id: 5, name: '面试题', path: '/questions'}, 
    {id: 6, name: '笔记', path: '/notes'}, 
    {id: 7, name: '工具', path: '/tools'}
  ];
  static articleType: articleType[] = [
    {id: 1, name: 'Javascript'},
    {id: 2, name: 'Vue'},
    {id: 3, name: 'React'}, 
    {id: 4, name: 'Angular'}, 
    {id: 5, name: 'nginx'}, 
    {id: 6, name: 'webpack'}, 
    {id: 7, name: 'nodeJs'},
    {id: 8, name: 'git'}, 
    {id: 9, name: 'nginx'}, 
    {id: 10, name: '其他'}, 
  ] 
}