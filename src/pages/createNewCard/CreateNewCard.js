import React from 'react';
import { Formik, Form } from 'formik';
import styles from './CreateNewCard.module.scss';
import { changeFilmsArray } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ChakraInpit from './chakraInput/ChakraInpit';
import MySelect from './MySelect';
import validation from './validation';

const initialValues = {
  poster: '',
  name: '',
  genre: '',
  director: '',
  desc: '',
  description: '',
  stars: '',
};

const CreateNewCard = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);

  return (
    <main className={styles.createNewCard}>
      <h1 className={styles.h1}>Заполните карту!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(changeFilmsArray([...films, values]));
          setSubmitting(false);
          resetForm();
          alert('Карта создана');
        }}
      >
        <Form>
          <ChakraInpit label="Постер" name="poster" type="text" />
          <ChakraInpit label="Название" name="name" type="text" />
          <ChakraInpit label="Режиссер" name="director" type="text" />
          <ChakraInpit label="Описание" name="desc" type="text" />
          <ChakraInpit label="Ссылка на фильм" name="description" />
          <ChakraInpit label="Рейтинг" name="stars" type="number" />

          <MySelect className={styles.select} name="genre">
            <option value="">Выберите жанр фильма</option>
            <option value="Боевики">Боевики</option>
            <option value="Комедии">Комедии</option>
            <option value="Фантастика">Фантастика</option>
            <option value="Ужасы">Ужасы</option>
          </MySelect>

          <div className={styles.btns}>
            <button type="submit">Создать карту</button>
            <button type="reset">Очистить</button>
          </div>
        </Form>
      </Formik>
      <Link to="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </main>
  );
};

export default CreateNewCard;

// https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/6f631486-e947-487d-94d6-41c2b5a8f5a0/300x450
// https://www.kinopoisk.ru/film/841700/
