/*
 * @Description: 
 * @Author: 阿龙  QQ:1357098586
 * @Date: 2022-09-15 22:56:07
 * @LastEditTime: 2022-10-20 17:40:23
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import React, { useEffect, useRef, useState } from 'react';

export default function Swiper({ children, customClass }: any) {
  const [slide, setSlide] = useState<boolean>(false);
  const slider = useRef<HTMLDivElement | null>(null);
  const [gWidth, setGWidth] = useState(false);
  const [pWidth, setPWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    isSlide();
    window.addEventListener('resize', isSlide);
    return () => {
      window.removeEventListener('resize', isSlide);
    }
  }, [gWidth, slide]);

  function isSlide() {
    if (slider.current) {
      const el = slider.current;
      const width = el.offsetWidth || 0;
      setWidth(width);
      const pwidth = el.parentElement && el.parentElement.offsetWidth || 0;
      setPWidth(pwidth);

      if (width + 160 > document.body.clientWidth) {
        setGWidth(true);
      } else {
        setGWidth(false);
      }

      if (width > pwidth) {
        setSlide(true);
      }
    }
  }

  function goNext() {
    if (-distance + pWidth < width) {

      slider.current && (slider.current.style.transform = `translateX(${distance - 62}px)`);
      setDistance(distance - 62);
    }
  }

  function goPrev() {
    if (distance < 0) {
      slider.current && (slider.current.style.transform = `translateX(${distance + 62}px)`);
      setDistance(distance + 62);
    }
  }

  return (
    <div className={`slide-container ${customClass ? ' ' + customClass : ''}`} style={{ width: gWidth ? '100%' : 'unset' }}>
      {slide && <span className="left-btn" onClick={() => goPrev()}>〈</span>}
      <div className="slide-wrapper">
        <div className="slide-box" ref={slider}>{children}</div>
      </div>
      {slide && <span className="right-btn" onClick={() => goNext()}>〉</span>}
    </div>
  );
}
