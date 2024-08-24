import './style/style.scss';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 import HomePage from './pages/HomePage';
 import Login from './components/Login'
import InsertNewsPage from './pages/InsertNewsPage';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/insertNews",
      element:<InsertNewsPage/>
    }
  ])

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
export default App;
