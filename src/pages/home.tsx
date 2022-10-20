import React, {useEffect, useCallback, useState} from 'react';
import { useSelector } from 'react-redux';
import EssayList from '@/components/business/EssayList';
import Icon from '@/components/base/Icon';
import styles from '@/statics/sass/home.module.scss';

export default function Home() {
  const [count, setCount] = useState(0);
  const theme = useSelector((state: any) => {
    return state.theme;
  });
  useEffect(() => {}, [theme]);
  const increment = () => {
    setCount(count+1);
    // console.log(count)
  }

  const increment2 = useCallback(() => {
    setCount(count+1)
  }, [count]);

  return (
    <div className="home">
      <div className={`content ${styles['essay-content']} pos-relative`}>
        <h3 className="px-8 py-32 theme">首页推荐 <Icon name="heart" color={theme.inColor} /></h3>
        <div className="homebg-pic"></div>
        <Icon name="heart" color={theme.inColor} increment={increment}/>{count}<br/>
        <Icon name="heart" color={theme.inColor} increment={increment2}/>{count}
        <EssayList keyId={theme.inColor}/ >
        <div className={styles.footer}>
          <div className={styles.content+ ' px-32 boxflex'}>
            <div className="leftpic base-bg girl1 flex-value"></div>
            <div className={styles.poem +' m-auto pl-56 pr-44'}>
              <p className={styles.sentence + ' my-16'}>纵有千古，横有八方，前途似锦，来日方长
                <span className={`inline-block ${styles.author} pt-24 ml-48`}>——梁启超</span>
              </p>
              <p className={styles.sentence + ' my-16'}>麦田桑叶大，梅雨稻田新。</p>
              <p className={styles.title + ' mt-44 mb-20'}>观刈麦</p>
              <p className={styles.sentence + ' mb-8'}>田家少闲月，五月人倍忙，夜来南风起，小麦覆陇黄。</p>
              <p className={styles.sentence + ' my-8'}>妇姑荷箪食，童稚携壶浆。相随饷田去，丁壮在南冈。</p>
              <p className={styles.sentence + ' my-8'}>足蒸暑土气，背灼炎天光。力尽不知热，但惜夏日长。</p>
            </div>
            <div className="rightpic base-bg girl2 flex-value"></div>
          </div>
          <div className="repeat-bg reed reed-offset"></div>
          <div className="repeat-bg reed repeat-reed ml-56"></div>
        </div>
      </div>
    </div>
  )
}