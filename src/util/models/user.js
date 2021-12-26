import * as yup from 'yup';

export default schema = yup.object({
  email: yup
    .string()
    .email('Please provide a valid email address.')
    .required('Required field'),
  password: yup.string().min(8).required('Required field'),
  fname: yup.string().required('Required field'),
  lname: yup.string().required('Required field'),
  address: yup.string().required('Required field'),
});
