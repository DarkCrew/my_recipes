import React, { ReactElement } from 'react';

import Header from 'components/Header/Header';

import styles from './Lunch.module.scss';

const Lunch = (): ReactElement => {
  return (
    <div className={styles.lunch}>
      <Header />
    </div>
  );
};

export default Lunch;
