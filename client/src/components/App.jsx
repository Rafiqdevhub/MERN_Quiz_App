import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
