import React, { useCallback, useState } from 'react'

export default function useVisible(isVisible = false) {
  const [visible, setVisible] = useState(isVisible);
  const show = useCallback(() => setVisible(true), [])
  const close = useCallback(() => setVisible(false), []);
  return {show, close, visible};
}
