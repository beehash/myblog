/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-07-04 13:06:44
 */
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
                        .theme-border: {border: 1px solid ${color}}
                        .intheme-border: {border: 1px solid #{inverseColor}}
                        .intheme-bg{background-color: ${inverseColor}}
                        .base-button{color: ${inverseColor}}
                        ::-webkit-scrollbar-thumb{
                          background-color: ${color}
                        }
                        .base-button.default-button{border-color: ${inverseColor}; color: ${color}}
                        .base-button.primary-button{color: ${inverseColor};background-color: ${color}; border-color: ${color}}
                        .base-button.text-button{color: ${color}}`
  }
  
  return (
    <div className="outer-theme">
      <label className="theme-label">
        <div className="inner-theme" onClick={handleThemeChange}>
        <input type="color" value={theme} onChange={handleThemeChange}/>
        <div className="theme-box">
          <span className="inline-block w-full text-center">主题</span>
          <Icon name="theme" className="theme" style={{width: 42+'px',height: 42+'px'}}/>
        </div>
      </div>
      </label>
    </div>
  );
}