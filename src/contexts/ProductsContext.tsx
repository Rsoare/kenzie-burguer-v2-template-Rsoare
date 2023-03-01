import { useEffect, createContext, useState } from 'react';
import { iDefaultProviderProps, iProducts, iProductsContext } from './@types';
import { api } from '../services/api';


export const ProductsContext = createContext({} as iProductsContext);

export const ProductsProvide = ({ children }: iDefaultProviderProps) => {

   const [search,setSearch] = useState("")

   const [products, setProducts] = useState<iProducts[] >([]);

   const getProducts = async () => {
      const token = localStorage.getItem('@Hamburgueria:Token');

      try {
         const response = await api.get('/products', {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setProducts(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      getProducts();
   }, []);

   const searchProducts =  products.filter(product => (
      search === "" ? true : (product.name.toLowerCase().trim().includes(search.toLowerCase().trim()))
   ))
      


   return (
      <ProductsContext.Provider value={{ products,searchProducts,setSearch}}>
         {children}
      </ProductsContext.Provider>
   );
};
