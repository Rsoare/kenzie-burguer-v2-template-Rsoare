import { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { CartContexts } from '../../contexts/CartContext';

const CartModal = () => {
   const { modalOpem, setModalOpem, CartProducts } = useContext(CartContexts);

   return (
      <StyledCartModalBox>
         <dialog>
            <header>
               <StyledTitle tag='h2' $fontSize='three'>
                  Carrinho de compras
               </StyledTitle>

               <button
                  type='button'
                  aria-label='Fechar'
                  onClick={() => {
                     setModalOpem(!modalOpem);
                  }}
               >
                  <MdClose size={21} />
               </button>
            </header>
            {CartProducts.length === 0 ? (
               <div className='emptyBox'>
                  <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                     Sua sacola está vazia
                  </StyledTitle>
                  <StyledParagraph textAlign='center'>
                     Adicione itens
                  </StyledParagraph>
               </div>
            ) : (
               <div className='cartBox'>
                  <CartProductList />
               </div>
            )}
         </dialog>
      </StyledCartModalBox>
   );
};

export default CartModal;
