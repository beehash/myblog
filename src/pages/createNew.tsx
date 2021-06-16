import React,{useState, BaseSyntheticEvent} from 'react';
import Editor from '@/components/business/Editor';
import Previewer from '@/components/business/Previewer';
import styles from '@/statics/sass/editor.module.scss';
import showdown from 'showdown';
import articleApi from '@/apis/article';

function CreateNew() {
  const [htmlc, setHtmlc] = useState('');
  const [textc, setTextc] = useState('');
  const [title, setTitle] = useState('');

  const converter = new showdown.Converter({
    omitExtraWLInCodeBlocks: true,
    ghCodeBlocks: true,
  });
  
  function handleChange(e: BaseSyntheticEvent) {
    setTextc(e.target.value);
    const html = converter.makeHtml(e.target.value);
    setHtmlc(html);
  }

  function save(e: BaseSyntheticEvent) {
    articleApi.addArticle({content: textc, title}).then((res) => {
      console.log('addArticle', res);
    });
  }

  return (
    <div className={styles['create-new']+' mt-56'}>
      <div className={styles['editor-header']+' w-full boxflex header'}>
        <input type="text" value={title}
          placeholder="请输入标题"
          className={styles['editor-title']+' pl-8'}
          onChange={(e) => setTitle(e.target.value)} />
        <div className={styles['editor-buttons']+' mr-8'}>
          <button className="base-button primary-button" onClick={save}>保 存</button>
        </div>
      </div>
      <div className={styles['editor-box']+' boxflex mt-8 p-8'}>
        <Editor textc={textc} editor-change={handleChange} />
        <Previewer htmlc={htmlc} />
      </div>
    </div>
  );
}

export default CreateNew;
