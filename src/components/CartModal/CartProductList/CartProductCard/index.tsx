import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContexts } from '../../../../contexts/CartContext';
import { iCartProductProps} from '../../../../contexts/@types';

const CartProductCard = ({product}:iCartProductProps) => {
   const { removeCartProduct} = useContext(CartContexts);

   const {name,img,id} = product


   return (
      <StyledCartProductCard>
         <div className='imageBox'>
            <img src={img} alt={name} />
         </div>
         <div className='contentBox'>
            <StyledTitle tag='h3' $fontSize='three'>
               {name}
            </StyledTitle>
            <button type='button' aria-label='Remover' onClick={()=> removeCartProduct(id)}>
               <MdDelete size={24} />
            </button>
         </div>
      </StyledCartProductCard>
   );
};
export default CartProductCard;
