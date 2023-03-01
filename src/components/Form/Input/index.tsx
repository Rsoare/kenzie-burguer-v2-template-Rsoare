import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface iInputProps {
   label: string;
   type: 'email' | 'password'| 'text';
   register: UseFormRegisterReturn<string>;
   error?: FieldError;
   
}

const Input = ({ label, type, register, error }: iInputProps) => (
   <fieldset>
      <StyledTextField label={label} type={type}  {...register}/>
      { error ? <StyledParagraph fontColor='red'>{error.message}</StyledParagraph> : null}
   </fieldset>
);

export default Input;
