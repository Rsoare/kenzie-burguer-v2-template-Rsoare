import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import { ProductsProvide } from './contexts/ProductsContext';
import { CartProvide } from './contexts/CartContext';
import  PublicRoutes  from './pages/PublicRoutes';
import  ProtectedRoutes  from './pages/ProtectedRoutes';

const Router = () => (
   <Routes>

      <Route path='/' element={<PublicRoutes />}>
         <Route path='/' element={<LoginPage />} />
         <Route path='/register' element={<RegisterPage />} />
      </Route>

      
      <Route path='/shop' element={<ProtectedRoutes />}>
         <Route
            index path='/shop'
            element={
               <ProductsProvide>
                  <CartProvide>
                     <ShopPage />
                  </CartProvide>
               </ProductsProvide>
            }
         />
      </Route>

   </Routes>
);

export default Router;
