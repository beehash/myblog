import React,{ useState, useEffect, BaseSyntheticEvent } from 'react';
import { useSelector } from 'react-redux'
import Editor from '@/components/business/Editor';
import Previewer from '@/components/business/Previewer';
import Modal from '@/components/base/Modal';
import TextArea from '@/components/base/TextArea';
import Checkbox from '@/components/base/Checkbox';
import RadioGroup from '@/components/base/RadioGroup';
import CheckboxGroup from '@/components/base/CheckboxGroup';
import Radio from '@/components/base/Radio';
import Message from '@/utils/message';
import styles from '@/statics/sass/editor.module.scss';
import showdown from 'showdown';
import articleApi from '@/apis/article';
const radioGroup = [{label: '苹果', value: 1}, {label: '梨子', value: 2}, {label: '香蕉', value: 3}];

interface articleForm {
  summary: string;
  publish: boolean;
  saveDraft: boolean;
  essayTag: string;
  articleType: [];
}
function CreateNew(props: any) {
  // useState
  const [htmlc, setHtmlc] = useState('');
  const [textc, setTextc] = useState('');
  const [title, setTitle] = useState('');
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState<articleForm>({summary: '', publish: false, saveDraft: false, essayTag: '1', articleType: []});

  // useEffect
  useEffect(() => {}, [formData]);

  // user
  const user = useSelector((state: any) => {
    return state.user;
  });

  // converter
  const converter = new showdown.Converter({
    omitExtraWLInCodeBlocks: true,
    ghCodeBlocks: true,
    requireSpaceBeforeHeadingText: true,
    rawHeaderId: true,
  });
  
  // handleChange
  function handleChange(e: BaseSyntheticEvent) {
    setTextc(e.target.value);
    const html = converter.makeHtml(e.target.value);
    setHtmlc(html);
  }
  
  // 保存
  function save() {
    const params = {
      content: textc,
      title,
      author: user.name,
      publish: formData.publish,
      summary: formData.summary,
    }
    if(!params.title || !params.content) return;
    
    articleApi.addArticle(params).then((res) => {
      console.log('addArticle', res);
    });
  }

  // 表单改变
  function handleFormChange ({field, value}: FormModel) {
    setFormData({
      ...formData,
      [field]: value,
    });
  }

  // 确认
  function onConfirm () {
    Message.info('nihao');
    save();
  }

  return (
    <div className="center-block">
      {/* 创建文章 */}
      <div className={styles['create-new']+' mt-56 center-block'}>
        <div className={styles['editor-header']+' w-full boxflex header'}>
          <input type="text" value={title}
          placeholder="请输入标题"
          className={styles['editor-title']+' pl-8'}
          onChange={(e) => setTitle(e.target.value)} />
          <div className={styles['editor-buttons']+' mr-8'}>
            <button className="base-button primary-button"
              onClick={() => setVisible(true)}>保 存</button>
          </div>
        </div>
        <div className={styles['editor-box']+' boxflex mt-8 p-8'}>
          <Editor textc={textc} editor-change={handleChange} />
          <Previewer htmlc={htmlc} />
        </div>
      </div>
      {/* 发布设置 */}
      <Modal title="发布设置" visible={visible}
        close={() => setVisible(false)}
        onConfirm={onConfirm}>
        {/* 简介 */}
        <div className="row">
          <TextArea value={formData.summary}
            field="summary"
            labelWidth={70}
            width="300px"
            maxLength={200}
            labelText="文章简介"
            onChange={(model: FormModel) => handleFormChange(model)} />
        </div>

        {/* checkbox */}
        <Checkbox value={formData.publish}
          className="mr-16"
          field="publish"
          labelWidth={70}
          labelText="公开"
          onChange={(model: FormModel) => handleFormChange(model)} />
        
        {/* Radio */}
        <Checkbox value={formData.saveDraft}
          field="saveDraft"
          labelWidth={70}
          labelText="存为草稿"
          onChange={(model: FormModel) => handleFormChange(model)} />

        {/* RadioGroup */}
        <RadioGroup value={formData.essayTag}
          radioGroup={radioGroup}
          field="essayTag"
          labelText="文章标签"
          onChange={(model: FormModel) => handleFormChange(model)}/>
        {/* checkboxGroup */}
        <CheckboxGroup value={formData.articleType}
          checkboxGroup={radioGroup}
          field="articleType"
          labelText="文章类型"
          onChange={(model: FormModel) => handleFormChange(model)}/>
      </Modal>
    </div>
  );
}

export default CreateNew;
