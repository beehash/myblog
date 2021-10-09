import React, { useState, BaseSyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import Icon from './Icon';

export default function Loading(props: any) {
  const [theme, setTheme] = useState('#125d98');
  const dispatch = useDispatch();

  function handleThemeChange (event: BaseSyntheticEvent) {
    const color: string = event.target.value;
    if(!color) return;
    setTheme(color);
    const styleEl: HTMLStyleElement = document.createElement('style');
    styleEl.id = 'theme';
    let styleId = document.getElementById('theme') as HTMLStyleElement;
    if(!styleId) {
      document.head.appendChild(styleEl);
      styleId = document.getElementById('theme') as HTMLStyleElement;;
    }

    const red = parseInt(color.slice(1, 3), 16);
    const green = parseInt(color.slice(3, 5), 16);
    const blue = parseInt(color.slice(5, 7), 16);
    
    const inverseColor = `#${(255-red).toString(16)}${(255-green).toString(16)}${(255-blue).toString(16)}`;
    dispatch({ type: 'SET_THEME', color, inColor: inverseColor});
    styleId.innerText = `.theme{color: ${color};}
                        .theme-bg{background-color: ${color}}
                        .intheme{
                          color: ${inverseColor}
                        }
                        .intheme-bg{background-color: ${inverseColor}}
                        .base-button{color: ${inverseColor}}
                        ::-webkit-scrollbar-thumb{
                          background-color: ${color}
                        }
                        .default-button{color: ${inverseColor}}
                        .base-button.primary-button{color: ${inverseColor};background-color: ${color}}
                        .base-button.text-button{color: ${inverseColor}}`
  }
  
  return (
    <div className="outer-theme">
      <label className="theme-label">
        <div className="inner-theme" onClick={handleThemeChange}>
        <input type="color" value={theme} onChange={handleThemeChange}/>
        <div className="theme-box">
          <span className="inline-block w-full text-center">主题</span>
          <Icon name="theme" className="theme" width={42} height={42}/>
        </div>
      </div>
      </label>
    </div>
  );
}