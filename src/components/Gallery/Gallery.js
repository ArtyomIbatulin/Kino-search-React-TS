import React from 'react';
import Card from './Card/Card';
import styles from './Gallery.module.css';
// import Stars from '../Stars/Stars';
import StarRatingComponent from 'react-star-rating-component';

const Gallery = (props) => {
  const films = props.films;
  const radioSelect = props.radioSelect;
  const isInputFocus = props.isInputFocus;
  const searchText = props.searchText;
  const rating = props.rating;

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
            <>
              <Card
                key={i}
                poster={item.poster}
                name={item.name}
                genre={item.genre}
                director={item.director}
                desc={item.desc}
                description={item.description}
                stars={rating}
                // stars={<Stars handleStarsChange={props.handleStarsChange} />}
              />
              <StarRatingComponent
                name='rate1'
                starCount={5}
                value={rating}
                onStarClick={props.onStarClick}
              />
            </>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Gallery;
