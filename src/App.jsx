import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Login from './component/Login';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },

    {
      path: "/login",
      element: <><Navbar /><Login /></>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
