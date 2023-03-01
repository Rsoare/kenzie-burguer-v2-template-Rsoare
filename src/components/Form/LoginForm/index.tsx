import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginSchema } from './validation';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { iUserLogin } from '../../../contexts/@types';
import Input from '../Input';
import { UserContext } from '../../../contexts/UserContext';

const LoginForm = () => {
   const { userLogin } = useContext(UserContext);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<iUserLogin>({ resolver: yupResolver(loginSchema) });

   const submit: SubmitHandler<iUserLogin> = (data) => {
      userLogin(data);
   };

   return (
      <StyledForm onSubmit={handleSubmit(submit)}>
         <Input
            label='Digite o seu E-mail'
            type='email'
            register={register('email')}
            error={errors.email}
         />
         <Input
            label='Digite a sua senha'
            type='password'
            register={register('password')}
            error={errors.password}
         />
         <StyledButton $buttonSize='default' $buttonStyle='green' type='submit'>
            Entrar
         </StyledButton>
      </StyledForm>
   );
};
export default LoginForm;
