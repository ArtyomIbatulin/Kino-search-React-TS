import React from 'react';
import Card from './Card/Card';
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <main>
      <section>
        <h1 className={styles.h1}>Найдите свои любимые фильмы</h1>
      </section>
      <section className={styles.section}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
};

export default Gallery;
