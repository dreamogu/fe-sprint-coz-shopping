import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './page/NotFound/NotFound';
import Main from './page/Main/Main';
import ProductsList from './page/Products/ProductsList';
import BookMark from './page/BookMark/BookMark';
import Privacy from './page/Privacy/Privacy';
import TermOfService from './page/TermOfService/TermOfService';
import Root from './page/Root/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: '/bookmark', element: <BookMark /> },
      { path: '/products/list', element: <ProductsList /> },
      { path: '/privacy', element: <Privacy /> },
      { path: '/term-of-service', element: <TermOfService /> },
    ],
  },
]);

function App() {
  console.log(localStorage);
  localStorage.clear();
  return <RouterProvider router={router} />;
}

export default App;
