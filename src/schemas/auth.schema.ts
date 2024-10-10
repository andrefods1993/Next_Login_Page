import * as yup from 'yup';

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Por favor, insira seu e-mail!'),
  password: yup
    .string()
    .required('Por favor, insira sua senha!')
    .min(6, 'A senha deve ter pelo menos 6 caracteres!')
    .matches(/[A-Z]/, 'A senha deve ter pelo menos uma letra maiúscula!')
    .matches(/[a-z]/, 'A senha deve ter pelo menos uma letra minúscula!')
    .matches(/[0-9]/, 'A senha deve ter pelo menos um número!')
    .matches(
      /[!@#$%^&*]/,
      'A senha deve ter pelo menos um caractere especial!',
    ),
});
