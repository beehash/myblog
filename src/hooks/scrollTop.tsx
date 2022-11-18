/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-07-04 13:06:44
 */
import { useEffect } from 'react';
import { useLocation } from "react-router";

export function useScrollToTop() { // 注意自定义Hooks要用useXXX定义
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
