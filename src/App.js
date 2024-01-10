
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import TopHeader from './components/Header/TopHeader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BottomFooter from './components/Footer/BottomFooter';
import Home from './pages/Home';
import Login from './pages/auth/Login';  
import Blog from './pages/blog/Blog';
import About from './pages/About';
import Layout from './components/Layout';
import PageNotFound from './pages/page404';
import routes from './routes';

function App() {

  const router = createBrowserRouter([

      { 
        element:  <Layout />,
        errorElement: <PageNotFound />,
        children: routes
      }
  ])
  return (
      <RouterProvider router={router} />
  );
}

export default App;
