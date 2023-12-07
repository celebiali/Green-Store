
import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    email: Yup.string().email('Invalid email')
        .required('Email is required'),
});
