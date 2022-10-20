/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-08-01 12:54:40
 */
import ArticleApi from '@/apis/article';
import styles from '../statics/sass/article-detail.module.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import showdown from 'showdown';
import { useScrollToTop } from '@/hooks/scrollTop';

export default function ArticleDetail(props: {id: string}) {
  const [htmlc, setHtmlc] = useState('');
  const [title, setTitle] = useState('');
  useScrollToTop();

  const params: {articleId: string} = useParams();

  const converter = new showdown.Converter({
    omitExtraWLInCodeBlocks: true,
    ghCodeBlocks: true,
    requireSpaceBeforeHeadingText: true,
    noHeaderId: true,
    tables: true,
    strikethrough: true,
    tasklists: true,
    openLinksInNewWindow: true,
    emoji: true,
    underline: true,
    simpleLineBreaks: true,
    splitAdjacentBlockquotes: true,
  });

  function getArticleById() {
    ArticleApi.getArticleById({ id: params.articleId || 'sn1622627657778800' })
      .then((res) => {
        const html = converter.makeHtml(res.data.content);
        setTitle(res.data.title);
        setHtmlc(html);
      });
  }

  useEffect(() => {
    getArticleById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles['article-detail']}>
      <div className="repeat-bg star" />
      <h1 className="text-center theme pt-48 pb-24">{title}</h1>
      <div className={`${styles.content} center-block`}>
        <div className={`${styles.previewer} previewer`}><div className={styles['html-previewer']} dangerouslySetInnerHTML={{ __html: htmlc }} /></div>
      </div>
      <div className="repeat-bg flower1" />

    </div>
  );
}
