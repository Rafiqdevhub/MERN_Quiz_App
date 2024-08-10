import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
import { CheckUserExist } from "../helper/helper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path: "/quiz",
      element: (
        <CheckUserExist>
          <Quiz />
        </CheckUserExist>
      ),
    },
    {
      path: "/result",
      element: (
        <CheckUserExist>
          <Result />
        </CheckUserExist>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
