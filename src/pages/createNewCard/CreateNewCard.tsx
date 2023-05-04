import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import styles from './CreateNewCard.module.scss';
import { actions } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MyTextInput from './components/myTextInput/MyTextInput';
import MySelect from './components/mySelect/MySelect';
import validation from './validation';
import { AppStateType } from '../..';

type PropsType = {

}

type InitialValues = {
  poster: string,
  name: string,
  genre: string,
  director: string,
  desc: string,
  description: string,
  stars: number,
}


const initialValues: InitialValues = {
  poster: '',
  name: '',
  genre: '',
  director: '',
  desc: '',
  description: '',
  stars: 0,
};


const CreateNewCard: FC<PropsType> = () => {
  const dispatch = useDispatch();
  const films = useSelector((state: AppStateType) => state.films);

  return (
    <main className={styles.createNewCard}>
      <h1 className={styles.h1}>Заполните карту!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(actions.changeFilmsArray([...films, values]));
          setSubmitting(false);
          resetForm();
          alert('Карта создана');
        }}
      >
        <Form>
          <MyTextInput label="Постер" name="poster" type="text" />
          <MyTextInput label="Название" name="name" type="text" />
          <MyTextInput label="Режиссер" name="director" type="text" />
          <MyTextInput label="Описание" name="desc" type="text" />
          <MyTextInput label="Ссылка на фильм" name="description" type="text" />
          <MyTextInput label="Рейтинг" name="stars" type="number" />

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
      <Link to="/Kino-search-React-TS" className={styles.link}>
        Вернуться на главную
      </Link>
    </main>
  );
};

export default CreateNewCard;
