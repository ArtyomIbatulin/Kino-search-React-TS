import React, {FC} from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      Kino Poisk 2021
      <Link to="/create-new-card" className={styles.link}>
        Создать карту
      </Link>
    </footer>
  );
};

export default Footer;
