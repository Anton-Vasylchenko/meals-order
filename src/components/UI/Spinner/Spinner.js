import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles['loadingio-spinner-double-ring']}>
      <div className={styles.ldio}>
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;