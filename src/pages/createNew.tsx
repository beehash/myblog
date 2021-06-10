import React,{useState, BaseSyntheticEvent} from 'react';
import Editor from '@/components/business/Editor';
import Previewer from '@/components/business/Previewer';
import showdown from 'showdown';

function CreateNew() {
  const [htmlc, setHtmlc] = useState('');
  const [textc, setTextc] = useState('');
  const [title, setTitle] = useState('');

  const converter = new showdown.Converter();
  
  function handleChange(e: BaseSyntheticEvent) {
    console.log(e);
    setTextc(e.target.value);
    const html = converter.makeHtml(e.target.value);
    setHtmlc(html);
  }

  return (
    <div className="editor">
      <h1><br/>dgadsgsfsdg</h1>
      <div className="w-full">
        <input type="text" value={title}
          className="editor-title"
          onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className="editor-box boxflex mt-8 p-8">
        <Editor textc={textc} editor-change={handleChange}/>
        <Previewer htmlc={htmlc}/>
      </div>
    </div>
  )
}

export default CreateNew;