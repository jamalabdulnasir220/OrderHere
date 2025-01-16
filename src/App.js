import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import Cart from "./components/Cart";
import { UserProvider } from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ResMenu from "./components/ResMenu";

const AppLayout = () => {
  return (
    <div className="my-app">
      <Provider store={appStore}>
        <UserProvider>
          <Header />
          <Outlet />
        </UserProvider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:ResId",
        element: <ResMenu />
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
