/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../../assets/images/chef.png';

import styles from './Header.module.scss';

const Header = (): ReactElement => {
  const location = useLocation();

  const [currentUrl, setCurrentUrl] = React.useState('');

  const checkLocation = (): void => {
    const pathName = location.pathname.substring(1);
    setCurrentUrl(pathName);
  };

  React.useEffect(() => {
    checkLocation();
  }, [location]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContainer}>
          <NavLink to="/" className={styles.logo}>
            <img src={logo} alt="logo" />
            <p className={styles.logoName}>EatYummy</p>
          </NavLink>
          <p className={styles.title}>{currentUrl}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
