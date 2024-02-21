import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "../Layout/MainLayout";
import Error from "../Error/Error";
import AddProduct from "../AddProduct/AddProduct";
import Login from "../Login/Login";
import Register from "../register/Register";
 import PrivateRoute from "../PrivateRouter/PrivateRouter";
//  import UpdateProduct from "../AddProduct/UpdateProduct";
import MyCart from "../MyCart/MyCart";
import BRand from "../AddProduct/BRand";
// import MoreDetails from "../AddProduct/MoreDetails";
 
const myCratedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error />,
    children: [
      { 
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            {" "}
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      

      {
        path: "/brandsCard/:brand",
        element: <BRand></BRand>,
        // loader: ({params}) =>
        //   fetch(`http://localhost:5000/brandsCard/${params.brand}`),
      },
      

      // {
      //   path: "/details/:id",
      //   element: <PrivateRoute><MoreDetails></MoreDetails></PrivateRoute>,
      //   loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
      // },

      // {
      //   path: "/updateProduct/:id",
      //   element: (
      //     <PrivateRoute>
      //       {" "}
      //       <UpdateProduct></UpdateProduct>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(
      //       `http://localhost:5000/brandsCard/${params.id}`
      //     ),
      // },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default myCratedRoute;
