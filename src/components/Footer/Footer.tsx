import React, {FC} from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

type PropsType = {}

const Footer: FC<PropsType> = () => {
  return (
    <footer className={styles.footer}>
      Kino Poisk 2021
      <Link to="/Kino-search-React-TS/create-new-card" className={styles.link}>
        Создать карту
      </Link>
    </footer>
  );
};

export default Footer;
