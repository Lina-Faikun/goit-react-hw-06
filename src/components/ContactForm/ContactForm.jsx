import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required field'),
    number: Yup.string()
      .matches(/^[0-9-]+$/, 'Invalid number format')
      .required('Required field'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label>
          Name:
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label>
          Number:
          <Field type="text" name="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>
        <button className={css.button} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
