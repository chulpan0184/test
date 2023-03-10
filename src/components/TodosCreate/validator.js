/* eslint-disable linebreak-style */
import * as Yup from 'yup'
import { date } from 'yup/lib/locale'

const initialValues = {
  title: '',
  description: '',
  img: '',
  tags: false,
  deadLine: null,
}

console.log(initialValues)

export const createTodoFormValidationSchema = Yup.object({
  title: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  description: Yup.string()
    .max(100, 'Must be 20 characters or less'),
  img: Yup.string()
    .url()
    .required('Required'),
  tags: Yup.string()
    .oneOf(
      ['sport', 'study'],
      'Invalid Tag Type',
    )
    .required('Required'),
  deadLine: date().default(() => new Date(new Date().setDate(new Date().getDate() + 7))),
})

//   Валидация email
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Required'),
