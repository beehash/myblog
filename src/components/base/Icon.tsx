import React from 'react';
import SVGS from '@/utils/svgs';

export default function Icon(props: {name: string}) {
  return (
    <span className="base-icon">{(SVGS as Obj)[props.name]}</span>
  )
}
