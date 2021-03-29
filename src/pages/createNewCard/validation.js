import * as Yup from 'yup';

const validation = Yup.object({
  poster: Yup.string()
    .trim()
    .url('Некорректный URL')
    .required('Обязательное поле'),
  name: Yup.string()
    .trim()
    .max(20, 'Не более 20 символов')
    .required('Обязательное поле'),
  genre: Yup.string()
    .oneOf(['Боевики', 'Комедии', 'Фантастика', 'Ужасы'], 'Неправильный жанр')
    .required('Обязательное поле'),
  director: Yup.string()
    .trim()
    .max(20, 'Не более 20 символов')
    .required('Обязательное поле'),
  desc: Yup.string().trim().required('Обязательное поле'),
  description: Yup.string()
    .trim()
    .url('Некорректный URL')
    .required('Обязательное поле'),
  stars: Yup.number().required('Обязательное поле').max(5),
});

export default validation;
