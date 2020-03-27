/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function BrowserWindow({children, minHeight, backgroundColor, url, src}) {
  if (src) children =  (<iframe src={useBaseUrl(src)} frameBorder="0"  style={{minHeight}}></iframe>);
  return (
    <div className={styles.browserWindow}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{background: '#f25f58'}} />
          <span className={styles.dot} style={{background: '#fbbe3c'}} />
          <span className={styles.dot} style={{background: '#58cb42'}} />
        </div>
        <div className={styles.browserWindowAddressBar}>
          <input disabled type="text" value={url} readOnly />
        </div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.browserWindowBody} style={{backgroundColor}}>{children}</div>
    </div>
  );
}

export default BrowserWindow;
