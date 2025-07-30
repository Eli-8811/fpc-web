import * as yup from 'yup';

export const loginSchema = yup.object({
  user: yup
    .string()
    .min(5, 'Mínimo 5 caracteres')
    .matches(/^\w+$/, 'Solo alfanumérico, sin espacios')
    .required('Usuario obligatorio'),
  sensible: yup
    .string()
    .min(5, 'Mínimo 5 caracteres')
    .matches(/^\S+$/, 'Sin espacios')
    .required('Contraseña obligatoria'),
});