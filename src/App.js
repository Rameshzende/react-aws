import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Headers';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Project from './Components/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/project",
    element: <Project />,
  },
]);

function App() {
  return (
    <div style={{height: '100vh', width: '100wh', backgroundColor: '#f3efef'}}>
       <Header />
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
