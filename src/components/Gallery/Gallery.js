import React from 'react';
import Card from './Card/Card';
import StarRatingComponent from 'react-star-rating-component';
import styles from './Gallery.module.scss';

const Gallery = (props) => {
  const { films, radioSelect, searchText } = props;

  const createfilteredData = () => {
    let res;
    switch (radioSelect) {
      case 'all':
        res = films;
        break;
      case 'action_movie':
        res = films.filter((item) => item.genre === 'Боевики');
        break;
      case 'comedy':
        res = films.filter((item) => item.genre === 'Комедии');
        break;
      case 'fantasy':
        res = films.filter((item) => item.genre === 'Фантастика');
        break;
      case 'horror':
        res = films.filter((item) => item.genre === 'Ужасы');
        break;
    }
    return res;
  };

  const filteredData = createfilteredData().filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.director.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main className={styles.main}>
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
              rating={
                <StarRatingComponent
                  name='rate'
                  editing={false}
                  starCount={5}
                  value={item.stars}
                />
              }
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Gallery;
