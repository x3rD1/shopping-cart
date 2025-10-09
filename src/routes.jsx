import App from "./components/App/App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Product from "./components/Product/Product";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "products/:name", element: <Product /> },
    ],
  },

  { path: "*", element: <ErrorPage /> },
];

export default routes;
