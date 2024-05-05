import React from 'react';
import logo from '../../Assets/logo.png';
import styles from './header.module.css'; 

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Header;
