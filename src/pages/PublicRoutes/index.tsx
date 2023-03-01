import { Outlet } from "react-router-dom"
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const PublicRoutes = () => {

   const { user } = useContext(UserContext);

   return !user && <Outlet/>
   
}




export default PublicRoutes