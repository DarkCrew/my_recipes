import React, { ReactElement } from 'react';

import Header from 'components/Header/Header';

import styles from './Drink.module.scss';

const Drink = (): ReactElement => {
  return (
    <div className={styles.drink}>
      <Header />
    </div>
  );
};

export default Drink;
