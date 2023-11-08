import * as yup from 'yup';

export const paymentFormValidationSchema = yup.object().shape({
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

export const orderFormValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  phone_number: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
});