import React from 'react';
import { useField } from 'formik';
import styles from '../../CreateNewCard.module.scss';

type PropsType = {
  label?: string,
  id?: string,
  name: string,
}

const MySelect: React.FC<PropsType & {className: string}> = ({ label, ...props }) => {
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

export default MySelect;
