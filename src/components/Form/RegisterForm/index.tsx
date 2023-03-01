import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { registerSchema } from './validation';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { iUserRegister } from '../../../contexts/@types';
import { UserContext } from '../../../contexts/UserContext';



const RegisterForm = () => {

   const {userRegister} = useContext(UserContext)

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<iUserRegister>({ resolver: yupResolver(registerSchema) });


   const submit: SubmitHandler<iUserRegister> = (data) => {
      userRegister(data);
   };

   return(
   <StyledForm onSubmit={handleSubmit(submit)}>
         <Input
            label='Nome'
            type='text'
            register={register('name')}
            error={errors.name}
         />
         <Input
            label='E-mail'
            type='text'
            register={register('email')}
            error={errors.email}
         />
         <Input
            label='Senha'
            type='text'
            register={register('password')}
            error={errors.password}
         />
         <Input
            label='Comfirmação de Senha'
            type='text'
            register={register('confirmationPassword')}
            error={errors.confirmationPassword}
         />

      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
         Cadastrar
      </StyledButton>
   </StyledForm>
   )

};

export default RegisterForm;
