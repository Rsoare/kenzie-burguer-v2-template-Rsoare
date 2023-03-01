import * as yup from 'yup';

export const registerSchema = yup.object().shape({
   name: yup.string().required('Nome Obrigatorio'),

   email: yup.string()
   .matches(/[a-z0-9.]+/,"Esse não e um E-mail valido ")
   .matches(/@/, "Esse não e um E-mail valido ")
   .matches(/[a-z0-9]+/, "Esse não e um E-mail valido ")
   .matches(/\./, "Esse não e um E-mail valido ")
   .matches(/[a-z]+/, "Esse não e um E-mail valido ")
   .required("E-mail obrigatorio"),

   password: yup.string()
   .matches(/[a-zA-Z]/,"Sua senha deve conter uma letra")
   .matches(/(\d)/, "Deve conter ao menos 1 número")
   .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
   .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),

   confirmationPassword: yup.string()
   .oneOf([yup.ref("password")],"Confimação de senha invalida")
   .required('Confirmação de senha é obrigatória'),
});
