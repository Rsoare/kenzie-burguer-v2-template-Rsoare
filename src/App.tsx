import Router from './routes';
import { GlobalStyles } from './styles/global';
import { UserProvider } from './contexts/UserContext';


const App = () => (
   <>
      <GlobalStyles />
      <UserProvider>
         <Router />
      </UserProvider>

   </>
);

export default App;
