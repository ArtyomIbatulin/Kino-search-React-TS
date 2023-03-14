import React from 'react';
import styles from '../../CreateNewCard.module.scss';
import { useField } from 'formik';

type PropsType = {
  label?: string,
  id?: string
  name: string
}

const MyTextInput: React.FC<PropsType> = ({ label, ...props }) => {
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

export default MyTextInput;
