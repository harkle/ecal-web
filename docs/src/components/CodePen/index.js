import React from 'react';

import styles from './styles.module.css';

function CodePen({height, src}) {
  return (
    <iframe height={height} src={src} frameBorder="no"></iframe>
  );
}

export default CodePen;
