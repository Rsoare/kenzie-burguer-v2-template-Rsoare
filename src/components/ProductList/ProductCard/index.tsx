import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { iProductProps } from '../../../contexts/@types';
import { CartContexts } from '../../../contexts/CartContext';

const ProductCard = ({ product }: iProductProps) => {
   const { category, img, name, price } = product;

   const {addProduct} =useContext(CartContexts)

   return (
      <StyledProductCard>
         <div className='imageBox'>
            <img src={img} alt={name} />
         </div>
         <div className='content'>
            <StyledTitle tag='h3' $fontSize='three'>
               {name}
            </StyledTitle>
            <StyledParagraph className='category'>{category}</StyledParagraph>
            <StyledParagraph className='price'>
               R$ {price.toFixed(2)}
            </StyledParagraph>
            <StyledButton $buttonSize='medium' $buttonStyle='green' onClick={()=> addProduct(product)}>
               Adicionar
            </StyledButton>
         </div>
      </StyledProductCard>
   );
};

export default ProductCard;
