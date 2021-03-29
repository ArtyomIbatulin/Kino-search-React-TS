import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styles from './CreateNewCard.module.scss';
import { changeFilmsArray } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { ThemeProvider, theme } from '@chakra-ui/react';
// import ChakraInpit from '../../components/chakraInput/ChakraInpit';

const CreateNewCard = () => {
  const dispatch = useDispatch();
  // let newFilms = [];
  const films = useSelector((state) => state.films);

  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <div className={styles.formControl}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={styles.error}>{meta.error}</div>
        ) : null}
      </div>
    );
  };

  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={styles.error}>{meta.error}</div>
        ) : null}
      </>
    );
  };

  return (
    // <ThemeProvider theme={theme}>
    <main className={styles.createNewCard}>
<<<<<<< HEAD
      <h1 className={styles.h1}>Заполните карту!</h1>
=======
      <h1>Заполните карту!</h1>
>>>>>>> review
      <Formik
        initialValues={{
          poster: '',
          name: '',
          genre: '',
          director: '',
          desc: '',
          description: {
            href: '',
            rel: 'noreferrer',
            target: '_blank',
            children: 'Описание',
          },
          stars: '',
        }}
        validationSchema={Yup.object({
          poster: Yup.string()
            .trim()
            .url('Некорректный URL')
            .required('Обязательное поле'),
          name: Yup.string()
            .trim()
            .max(20, 'Не более 20 символов')
            .required('Обязательное поле'),
          genre: Yup.string()
            .oneOf(
              ['Боевики', 'Комедии', 'Фантастика', 'Ужасы'],
              'Неправильный жанр'
            )
            .required('Обязательное поле'),
          director: Yup.string()
            .trim()
            .max(20, 'Не более 20 символов')
            .required('Обязательное поле'),
          desc: Yup.string().trim().required('Обязательное поле'),
          description: Yup.object().shape({
            href: Yup.string()
<<<<<<< HEAD
=======
              .trim()
>>>>>>> review
              .url('Некорректный URL')
              .required('Обязательное поле'),
            rel: Yup.string(),
            target: Yup.string(),
            children: Yup.string(),
          }),
          stars: Yup.number().required('Обязательное поле').max(5),
        })}
        onSubmit={(values, { setSubmitting }) => {
<<<<<<< HEAD
          setTimeout(() => {
            newFilms = [...films, values];
            dispatch(changeFilmsArray(newFilms));
            setSubmitting(false);
          }, 400);
=======
          // setTimeout(() => {
          // const newFilms = [...films, values];
          dispatch(changeFilmsArray([...films, values]));
          setSubmitting(false);
          // resetForm();
          alert('Карта создана');
          // }, 400);
>>>>>>> review
        }}
      >
        <Form>
          <MyTextInput label="Постер" name="poster" type="text" />
          <MyTextInput label="Название" name="name" type="text" />
<<<<<<< HEAD
=======
          <MyTextInput label="Режиссер" name="director" type="text" />
>>>>>>> review
          <MyTextInput label="Описание" name="desc" type="text" />
          <MyTextInput label="Ссылка на фильм" name="description.href" />
          <MyTextInput label="Рейтинг" name="stars" type="number" />

<<<<<<< HEAD
          <MySelect label="Жанр" name="genre">
=======
          <MySelect className={styles.select} name="genre">
>>>>>>> review
            <option value="">Выберите жанр фильма</option>
            <option value="Боевики">Боевики</option>
            <option value="Комедии">Комедии</option>
            <option value="Фантастика">Фантастика</option>
            <option value="Ужасы">Ужасы</option>
          </MySelect>

<<<<<<< HEAD
          <button type="submit">Submit</button>
=======
          <div className={styles.btns}>
            <button type="submit">Создать карту</button>
            <button type="reset">Очистить</button>
          </div>
>>>>>>> review
        </Form>
      </Formik>
      <Link to="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </main>
    // </ThemeProvider>
  );
};

export default CreateNewCard;

// https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/6f631486-e947-487d-94d6-41c2b5a8f5a0/300x450
// https://www.kinopoisk.ru/film/841700/
