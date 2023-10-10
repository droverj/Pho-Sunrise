import * as yup from 'yup';

export const paymentFormSchema = yup.object().shape({
  cardholderName: yup.string().required('Cardholder name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone_number: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  streetAddress: yup.string().required('Street address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State/Province is required'),
  postalCode: yup.string().required('Postal code is required'),
  country: yup.string().required('Country is required'),
});