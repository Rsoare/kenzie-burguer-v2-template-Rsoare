import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
   iDefaultProviderProps,
   iCartContext,
   iProducts,
   iCartProductId,
   iCartProducts,
} from './@types';

export const CartContexts = createContext({} as iCartContext);

export const CartProvide = ({ children }: iDefaultProviderProps) => {
   const localStorageProducts = localStorage.getItem('@Hamburgueria:cartProducts');

   const [modalOpem, setModalOpem] = useState(false);

   const [CartProducts, SetCartProducts] = useState<iCartProducts[]>(
      localStorageProducts ? JSON.parse(localStorageProducts) : []
   );

   useEffect(() => {
      localStorage.setItem('@Hamburgueria:cartProducts',JSON.stringify(CartProducts));
   }, [CartProducts]);

   const addProduct = (selectedProduct: iProducts) => {
      if (CartProducts.some((product) => product.id === selectedProduct.id)) {
         toast.error('O produto ja foi selecionado');
      } else {
         SetCartProducts([...CartProducts, selectedProduct]);
         toast.success('Produto adicionado ao carrinho');
      }
   };

   const removeCartProduct = (productId: iCartProductId) => {
      const newCartProducts = CartProducts.filter(
         (CartProduct) => CartProduct.id !== productId
      );
      SetCartProducts(newCartProducts);
      toast.success('Produto removido com sucesso');
   };

   const removeAllCartProducts = () => {
      SetCartProducts([]);
      toast.success('Todos os produtos foram removidos');
   };

   return (
      <CartContexts.Provider
         value={{
            modalOpem,
            setModalOpem,
            removeAllCartProducts,
            removeCartProduct,
            addProduct,
            CartProducts,
         }}
      >
         {children}
      </CartContexts.Provider>
   );
};
