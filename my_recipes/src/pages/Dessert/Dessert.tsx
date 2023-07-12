import React, { ReactElement } from 'react';

import Header from 'components/Header/Header';

import styles from './Dessert.module.scss';

const Dessert = (): ReactElement => {
  return (
    <div className={styles.dessert}>
      <Header />
    </div>
  );
};

export default Dessert;
