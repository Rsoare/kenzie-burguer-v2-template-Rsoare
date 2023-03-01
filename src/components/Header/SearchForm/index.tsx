import { useContext,useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { StyledButton } from '../../../styles/button';

const SearchForm = () => {

   const {setSearch} = useContext(ProductsContext) 

   const [inputValue,setInputValue] = useState("")

   const submit = (event: { preventDefault: () => void; }) => {
      event.preventDefault()
      
      setSearch(inputValue)

      setInputValue("")
   }

   return (
      <StyledSearchForm onSubmit={submit}>
         <input type='text'value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder='Digitar pesquisa' />
         <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green' onClick={submit}>
            <MdSearch />
         </StyledButton >
      </StyledSearchForm>
   );
};
export default SearchForm;
