/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useState, useEffect, BaseSyntheticEvent } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
// import Slot from '@/components/base/Slot';
import Editor from '@/components/business/Editor';
import Previewer from '@/components/business/Previewer';
import Modal from '@/components/base/Modal';
import TextArea from '@/components/base/TextArea';
import Checkbox from '@/components/base/Checkbox';
import RadioGroup from '@/components/base/RadioGroup';
import CheckboxGroup from '@/components/base/CheckboxGroup';
import UserApi from '@/apis/user';
import Message from '@/utils/message';
import styles from '@/statics/sass/editor.module.scss';
import showdown from 'showdown';
import articleApi from '@/apis/article';
import configService from '@/services/config.service';
import { hasPermission } from '@/utils';

interface articleForm {
  summary: string;
  publish: boolean;
  saveDraft: boolean;
  essayTag: number;
  articleType: number[];
}
const formDataStatic = {
  summary: '',
  publish: false,
  saveDraft: false,
  essayTag: 1,
  articleType: [1],
};

function CreateNew(props: any) {
  // useState
  const [htmlc, setHtmlc] = useState('');
  const [textc, setTextc] = useState('');
  const [title, setTitle] = useState('');
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState<articleForm>({...formDataStatic});
  const history = useHistory();
  const dispatch = useDispatch();
  // user
  const user = useSelector((state: any) => {
    return state.user;
  });
  const { inviteCode } = useParams<{inviteCode: string}>();

  // useEffect
  useEffect(() => {
    const inviteCode2 = decodeURIComponent(inviteCode);
    if(inviteCode2 === '1') {
      const authed = hasPermission(['editor:view'], user.permission);
      !authed && history.replace('/bidden');
    } else {
      verifyInviteCode(inviteCode2);
    }
  }, [formData]);

  function verifyInviteCode(inviteCode2: string) {
    UserApi.verifyInviteCode(inviteCode2).then(res => {
      if(res && res.success) {
        dispatch({type: 'SET_INVITECODE', inviteCode: inviteCode});
      } else {
        history.replace('/bidden');
      }
    });
  }

  // converter
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
  
  // handleChange
  function handleChange(e: BaseSyntheticEvent) {
    setTextc(e.target.value);
    const html = converter.makeHtml(e.target.value);
    setHtmlc(html);
  }
  
  // 保存
  function save() {
    const params = {
      ...formData,
      content: textc,
      title,
      author: user.username, 
      inviteCode: inviteCode,
    };

    if(!params.title || !params.content || !params.summary) {
      Message.warning('请填入标题、内容和简介！');
      return;
    };
    
    articleApi.addArticle(params).then((res) => {
      if(res.success) {
        setVisible(false);
        Message.success('文章保存成功！');
      }
    });
  }

  // 表单改变
  function handleFormChange ({field, value}: FormModel) {
    setFormData({
      ...formData,
      [field]: value,
    });
  }

  return (
    <div className="center-block">
      {/* 创建文章 */}
      <div className={styles['create-new']+' mt-56 center-block'}>
        {/* 标题 */}
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
        {/* 编辑 + 预览 */}
        <div className={styles['editor-box']+' boxflex mt-8'}>
          <Editor textc={textc} editor-change={handleChange} />
          <Previewer htmlc={htmlc} />
        </div>
        {/* 背景 */}
        <div className="repeat-bg reed fixed-bottom" style={{height: '100px', backgroundSize: '10% 100%'}}></div>
      </div>
      {/* 发布设置 */}
      <Modal title="发布设置" visible={visible}
        close={() => setVisible(false)}
        onConfirm={save}>
        <div className="modal-body">
          <div className="row">
            {/* 简介 */}
            <TextArea value={formData.summary}
              field="summary"
              labelWidth={70}
              width="300px"
              maxLength={200}
              labelText="文章简介"
              onChange={(model: FormModel) => handleFormChange(model)} />
          </div>

          <div className="row">
            {/* 公开 */}
            <Checkbox value={formData.publish}
              className="mr-32"
              field="publish"
              labelWidth={70}
              labelText="公开"
              onChange={(model: FormModel) => handleFormChange(model)} />

            {/* 存为草稿 */}
            <Checkbox value={formData.saveDraft}
              field="saveDraft"
              labelWidth={70}
              labelText="存为草稿"
              onChange={(model: FormModel) => handleFormChange(model)} />
          </div>
          
          <div className="row">
            {/* 文章标签 UDb9izhpR+KBP9WCjnlGvQ== */}
            <RadioGroup value={formData.essayTag}
              radioGroup={configService.tagType}
              field="essayTag"
              labelText="文章标签"
              labelKey="name"
              valueKey="id"
              onChange={(model: FormModel) => handleFormChange(model)} />
          </div>
          
          <div className="row">
            {/* 文章类型 */}
            <CheckboxGroup value={formData.articleType}
              checkboxGroup={configService.articleType}
              field="articleType"
              labelText="文章类型"
              labelKey="name"
              valueKey="id"
              onChange={(model: FormModel) => handleFormChange(model)}/>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CreateNew;
