import React, { useState, useEffect } from 'react';
import { Essay } from '@/models/Essay.model';
import UserApi from '@/apis/user'; 
import styles from '@/statics/sass/essay.module.scss';

export default function EssayList() {
  const [list, setList] = useState<Essay[]>([]);

  const getUser = () => {
    UserApi.getUser({name: 'aminsey'}).then((data) => {
      setList(data);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  function generateListTemplate() {
    return list.length > 0 && list.map((item: Essay) => {
      return (
        <li className={`${styles['essay-item']} p-12 my-8 theme-bg theme`} key={item.essayId}>
          <h3 className="text-left essay-title">{ item.title }</h3>
          <p className="text-justify">{ item.summary }</p>
        </li>
      );
    })
  }

  return (
    <div className="essayList">
      <ul>
        { generateListTemplate() }
        { generateListTemplate() }
      </ul>
    </div>
  );
}
