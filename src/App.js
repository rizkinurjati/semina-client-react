import { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';
// import { listen } from './redux/listener';

function App() {
  useEffect(() => {

  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
