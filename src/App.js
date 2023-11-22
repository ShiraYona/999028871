//npm i react-router-dom
import { BrowserRouter } from "react-router-dom"
import AppRoutes from './AppRoute';
import './App.css';

function App() {
  return (
    <>
     
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </>);
}

export default App;
