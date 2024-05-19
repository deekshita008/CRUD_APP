import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from "./Components/Header/Header";
import LoginForm from "./Components/Login/LoginForm";
import Home from "./Components/Home/Home";
import RegisterForm from "./Components/Register/RegisterForm";
import ErrorPage from "./error-page";
import Addemployee from "./Components/Home/AddEmployee";
import { GlobalProvider } from "./Components/context/GlobalState";
import Editemployee from "./Components/Home/EditEmployees";

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <>
        <Header />
        {/* <Sidebar /> */}
        <div className="main-container">
          <GlobalProvider>
            <Home />
          </GlobalProvider>
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <div className="main-container">
          <LoginForm />
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        {/* <Sidebar /> */}
        <div className="main-container">
          <LoginForm />
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: (
      <>
        <Header />
        <div className="main-container">
          <RegisterForm />
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/home/addemployees",
    element: (
      <>
        <Header />
        {/* <Sidebar /> */}
        <div className="main-container">
          <GlobalProvider>
            <Addemployee />
          </GlobalProvider>
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/home/edit/:id",
    element: (
      <>
        <Header />
        {/* <Sidebar /> */}
        <div className="main-container">
          <GlobalProvider>
            <Editemployee />
          </GlobalProvider>
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <div className="grid-container">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
