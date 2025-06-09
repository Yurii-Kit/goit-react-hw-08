import * as Yup from 'yup';

export const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(30, 'Name is too long')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^38\d{10}$/, 'Phone number must be in format 38XXXXXXXXXX')
    .required('Number is required'),
});
