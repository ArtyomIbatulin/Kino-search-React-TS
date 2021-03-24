import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styles from './CreateNewCard.module.scss';

const CreateNewCard = () => {
  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={styles.error}>{meta.error}</div>
        ) : null}
      </>
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
    <main className={styles.createNewCard}>
      <h1>Заполните карту!</h1>
      <Formik
        initialValues={{
          poster: '', // ссылка на картинку
          name: '', // название string
          genre: '', // select
          director: '', // режиссер string
          desc: '', // описание фильма string
          description: '', // ссылка на кинопоиск , ссылка
          stars: '', // число от 1 до 5
        }}
        validationSchema={Yup.object({
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
          description: Yup.string()
            .trim()
            .url('Must be a valid URL')
            .required(),
          stars: Yup.number().max(5),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput label="poster" name="poster" type="text" />
          <MyTextInput label="name" name="name" type="text" />
          <MyTextInput label="director" name="director" type="text" />
          <MyTextInput label="desc" name="desc" type="text" />
          <MyTextInput label="description" name="description" type="text" />
          <MyTextInput label="stars" name="stars" type="number" />

          <MySelect label="genre" name="genre">
            <option value="">Select a films type</option>
            <option value="action_movie">action_movie</option>
            <option value="comedy">comedy</option>
            <option value="fantasy">fantasy</option>
            <option value="horror">horror</option>
          </MySelect>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </main>
  );
};

export default CreateNewCard;
