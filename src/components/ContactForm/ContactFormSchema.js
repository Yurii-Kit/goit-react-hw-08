import * as Yup from 'yup';
export const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(30, 'Name is too long')
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^\+?[0-9]{1,4}?[0-9]{3,14}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    )
    .required('Number is required'),
});
