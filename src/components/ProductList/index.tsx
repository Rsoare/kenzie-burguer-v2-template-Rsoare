import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ProductsContext } from '../../contexts/ProductsContext';
import { iProducts } from '../../contexts/@types';

const ProductList = () => {
   const {searchProducts } = useContext(ProductsContext);

   return (
      <StyledProductList>
         {searchProducts.map((product: iProducts) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </StyledProductList>
   );
};
export default ProductList;
