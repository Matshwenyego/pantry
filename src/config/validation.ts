import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  number: Yup.string()
    .matches(
      /^(0)(6|7|8)\d{8}$/,
      'Enter a valid phone number (e.g., 0821234567)',
    )
    .required('Mobile number is required'),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Password is required')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export default schema;
