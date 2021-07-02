import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ArticleApi from '@/apis/article';
import banner from '@/statics/images/banner.jpeg';
import showdown from 'showdown';
import styles from '@/statics/sass/article-detail.module.scss';

export default function ArticleDetail(props: {id: string}) {
  const [htmlc, setHtmlc] = useState('');
  const [title, setTitle] = useState('');

  const params: {articleId: string} = useParams();

  const converter = new showdown.Converter({
    omitExtraWLInCodeBlocks: true,
    ghCodeBlocks: true,
    requireSpaceBeforeHeadingText: true,
    rawHeaderId: true,
  });

  function getArticleById() {
    // console.log(params)
    ArticleApi.getArticleById({id: params.articleId || 'sn1622627657778800'}).then((res) => {
      const html = converter.makeHtml(res.content);
      console.log(html);
      setTitle(res.title);
      setHtmlc(html);
    });
  }

  useEffect(() => {
    getArticleById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles['article-detail']}>
      <div className={styles['banner']}>
        <img src={banner} alt="article banner"></img>
      </div>
      <h1 className="text-center theme my-24">{title}</h1>
      <div className={styles.content+' center-block'}>
        <div className={styles.previewer + ' previewer'}>
          <div className={styles['html-previewer']} dangerouslySetInnerHTML={{__html: htmlc}}></div>
        </div>
      </div>
    </div>
  )
}