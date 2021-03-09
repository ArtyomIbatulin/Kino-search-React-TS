import React from 'react';
import Card from './Card/Card';
import styles from './Gallery.module.css';

const Gallery = (props) => {
  const films = props.films;
  console.log(films);

  return (
    <main>
      <section>
        <h1 className={styles.h1}>Найдите свои любимые фильмы</h1>
      </section>
      <section>
        <ul className={styles.section}>
          {films.map((item, i) => (
            <Card
              key={i}
              poster={item.poster}
              name={item.name}
              genre={item.genre}
              director={item.director}
              description={item.description}
              stars={item.stars}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Gallery;
