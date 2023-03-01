import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const ProtectedRoutes = () => {
   
   const { user } = useContext(UserContext);
   
   return !user ?  <Navigate to='/'/> : <Outlet /> 
};

export default ProtectedRoutes