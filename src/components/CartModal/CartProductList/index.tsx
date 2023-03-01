import { useContext,useState } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContexts } from '../../../contexts/CartContext';

const CartProductList = () => {

   const {CartProducts,removeAllCartProducts} = useContext(CartContexts)

      const total = CartProducts.reduce((previousValue,currentValue)=>(
         previousValue + currentValue.price),0) 

   return (
      <StyledCartProductList>
         <ul>
            {CartProducts.map(product => <CartProductCard product={product} key={product.id} /> )}
         </ul>

         <div className='totalBox'>
            <StyledParagraph>
               <strong>Total</strong>
            </StyledParagraph>
            <StyledParagraph className='total'>{total.toFixed(2)}</StyledParagraph>
         </div>
         <StyledButton $buttonSize='default' $buttonStyle='gray' onClick={removeAllCartProducts}>
            Remover todos
         </StyledButton>
      </StyledCartProductList>
   );
};

export default CartProductList;
