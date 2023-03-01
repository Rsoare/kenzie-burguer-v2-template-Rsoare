import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import { createContext, useState, useEffect } from 'react';
import {
   iUser,
   iUserLogin,
   iUserRegister,
   iUserContext,
   iDefaultProviderProps,
   iUserId
} from './@types';
import { api } from '../services/api';

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultProviderProps) => {
   const [user, setUser] = useState<iUser | null>(null);

   const navigate = useNavigate();

   const token = localStorage.getItem('@Hamburgueria:Token');

   useEffect(() => {
      if (token) {
         const autoLogin = async () => {
            const userid = jwt_decode<iUserId>(token);

            try {
               const response = await api.get(`/users/${userid.sub}`, {
                  headers: {
                     Authorization: `Bearer ${token}`,
                  },
               });
               navigate('/shop');

               setUser(response.data);
            } catch (error) {
               console.error(error);
            }
         };

         autoLogin();
      }
   }, []);

   const userLogin = async (data: iUserLogin) => {
      try {
         const response = await api.post('/login', data);

         navigate('/shop');

         setUser(response.data.user);

         toast.success("Login realizado com sucesso")

         localStorage.setItem('@Hamburgueria:Token', response.data.accessToken);
      } catch (error) {
         console.error(error);
      }
   };

   const userRegister = async (data: iUserRegister) => {
      try {
         const response = await api.post('/users', data);

         toast.success("Usuario Cadastrado com sucesso")

         navigate('/');

      } catch (error) {
         console.error(error);
         toast.error("Email já cadastrado")
      }
   };

   const userLogout = () => {
      setUser(null);
      localStorage.clear();
      navigate('/');
   };

   return (
      <UserContext.Provider value={{ userLogin, userRegister, userLogout, user }}>
         {children}
      </UserContext.Provider>
   );
};
