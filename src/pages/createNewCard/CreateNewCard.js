import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './CreateNewCard.module.scss';

const CreateNewCard = () => {
  const formik = useFormik({
    initialValues: {
      poster: '', // ссылка на картинку
      name: '', // название string
      genre: '', // select
      director: '', // режиссер string
      desc: '', // описание фильма string
      description: '', // ссылка на кинопоиск , ссылка
      stars: '', // число от 1 до 5
    },
    validationSchema: Yup.object({
      poster: Yup.string().trim().url('Must be a valid URL').required(),
      name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      genre: Yup.string()
        .oneOf(
          ['action_movie', 'comedy', 'fantasy', 'horror'],
          'Invalid Films Type'
        )
        .required('Required'),
      director: Yup.string()
        .max(3, 'Must be 3 characters or less')
        .required('Required'),
      desc: Yup.string().required('Required'),
      description: Yup.string().trim().url('Must be a valid URL').required(),
      stars: Yup.number().max(5),
    }),
    onSubmit: (values) => {
      console.log(values);
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <main className={styles.createNewCard}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="poster">poster</label>
        <input
          id="poster"
          name="poster"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.poster}
        />
        {formik.touched.poster && formik.errors.poster ? (
          <div>{formik.errors.poster}</div>
        ) : null}

        <label htmlFor="name">name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="director">director</label>
        <input
          id="director"
          name="director"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.director}
        />
        {formik.touched.director && formik.errors.director ? (
          <div>{formik.errors.director}</div>
        ) : null}

        <label htmlFor="desc">desc</label>
        <input
          id="desc"
          name="desc"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.desc}
        />
        {formik.touched.desc && formik.errors.desc ? (
          <div>{formik.errors.desc}</div>
        ) : null}

        <label htmlFor="description">description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}

        <label htmlFor="stars">stars</label>
        <input
          id="stars"
          name="stars"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.stars}
        />
        {formik.touched.stars && formik.errors.stars ? (
          <div>{formik.errors.stars}</div>
        ) : null}

        <button type="submit">Отправить</button>
      </form>
    </main>
  );
};

export default CreateNewCard;
