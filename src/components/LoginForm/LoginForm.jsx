import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { LoginFormSchema } from './LoginFormSchema';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={LoginFormSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" placeholder="Your email" />
          <ErrorMessage
            name="email"
            component="span"
            label
            className={css.error}
          />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" placeholder="Your password" />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
