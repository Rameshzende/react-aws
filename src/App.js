import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import FileUpload from './Components/fileUpload';
import Header from './Components/Headers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FileUpload />,
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
