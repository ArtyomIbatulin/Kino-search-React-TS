import React from 'react';
import Card from './Card/Card';
import styles from './Gallery.module.css';

const Gallery = (props) => {
  const films = props.films;
  const radioSelect = props.radioSelect;
  const isInputFocus = props.isInputFocus;
  const searchText = props.searchText;

  const createSearchingData = () => {
    return createfilteredData().filter(
      (item) =>
        item.name.toLowerCase().slice(0, searchText.length) ===
        searchText.toLowerCase()
    );
  };

  const createfilteredData = () => {
    if (radioSelect === 'all') {
      return films;
    }
    if (radioSelect === 'action_movie') {
      return films.filter((item) => item.genre === 'Боевики');
    }
    if (radioSelect === 'comedy') {
      return films.filter((item) => item.genre === 'Комедии');
    }
    if (radioSelect === 'fantasy') {
      return films.filter((item) => item.genre === 'Фантастика');
    }
    if (radioSelect === 'horror') {
      return films.filter((item) => item.genre === 'Ужасы');
    }
  };

  const filteredData = isInputFocus
    ? createSearchingData()
    : createfilteredData();

  return (
    <main>
      <section>
        <h1 className={styles.h1}>Найдите свои любимые фильмы</h1>
        <ul className={styles.ul}>
          {filteredData.map((item, i) => (
            <Card
              key={i}
              poster={item.poster}
              name={item.name}
              genre={item.genre}
              director={item.director}
              desc={item.desc}
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
