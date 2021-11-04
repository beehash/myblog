import React, { useState, useEffect } from 'react';

export default function AsyncComponent(component: AsyncComponent) {
  const [Base, setBase] = useState<JSX.Element>();

  useEffect(() => {
    component().then((component: {default: JSX.Element}) => {
      setBase(component.default);
    });
  }, []);

  return (<div></div>);
}
