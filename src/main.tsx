   import 'react-toastify/dist/ReactToastify.css';
   import React from 'react';
   import { BrowserRouter } from 'react-router-dom';
   import ReactDOM from 'react-dom/client';
   import { ToastContainer } from 'react-toastify';
   import { ThemeProvider } from 'styled-components';
   import { mainTheme } from './styles/theme';
   import App from './App';

   ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <BrowserRouter>
         <ThemeProvider theme={mainTheme}>
         <App />
         </ThemeProvider>
      </BrowserRouter>
      <ToastContainer
         position='top-center'
         autoClose={3500}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         draggable
         theme='dark'   
         />
   </React.StrictMode>
   );
