import React,{ useState, useEffect, BaseSyntheticEvent } from 'react';
import { useSelector } from 'react-redux'
import Editor from '@/components/business/Editor';
import Previewer from '@/components/business/Previewer';
import Modal from '@/components/base/Modal';
import TextArea from '@/components/base/TextArea';
import Checkbox from '@/components/base/Checkbox';
import styles from '@/statics/sass/editor.module.scss';
import showdown from 'showdown';
import articleApi from '@/apis/article';

function CreateNew(props: any) {
  const [htmlc, setHtmlc] = useState('');
  const [textc, setTextc] = useState('');
  const [title, setTitle] = useState('');
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState<{summary: string}>({summary: ''});

  useEffect(() => {
  }, [formData]);

  const user = useSelector((state: any) => {
    return state.user;
  });

  const converter = new showdown.Converter({
    omitExtraWLInCodeBlocks: true,
    ghCodeBlocks: true,
    requireSpaceBeforeHeadingText: true,
    rawHeaderId: true,
  });
  
  function handleChange(e: BaseSyntheticEvent) {
    setTextc(e.target.value);
    const html = converter.makeHtml(e.target.value);
    setHtmlc(html);
  }

  function save(e: BaseSyntheticEvent) {
    setVisible(true);
    const params = {
      content: textc,
      title,
      author: user.name,
      summary: textc.substring(0, 120),
    }
    if(!params.title || !params.content) return;
    
    articleApi.addArticle(params).then((res) => {
      console.log('addArticle', res);
    });
  }

  function handleFormChange ({field, value}: FormModel) {
    setFormData({
      ...formData,
      [field]: value,
    });
  }

  function onConfirm () {

  }

  return (
    <div className="center-block">
      <div className={styles['create-new']+' mt-56 center-block'}>
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
    <Modal title="发布设置" visible={visible}
      close={() => setVisible(false)}
      onConfirm={onConfirm}>
      <TextArea value={formData.summary}
        field="summary"
        labelWidth={70}
        maxLength={200}
        labelText="文章简介"
        onChange={(model: FormModel) => handleFormChange(model)} />
      <Checkbox
        field="publish"
        labelText="公开"
        onChange={(model: FormModel) => handleFormChange(model)} />
    </Modal>
    </div>
  );
}

export default CreateNew;
