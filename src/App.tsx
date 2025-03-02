import { BrowserRouter } from 'react-router';
import { ApplicationRoutes } from './screens/ApplicationRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ApplicationRoutes />
    </BrowserRouter>
  );
}

export default App;
