import { createBrowserRouter } from "react-router";
import Homepage from "../components/homepage/Homepage";
import DefaultLayout from "../components/defaultLayout/DefaultLayout";
import Webshop from "../components/webshop/Webshop";
import Form from "../components/form/From";
import Cart from "../components/cart/Cart";


const router = createBrowserRouter([
    {
        path:'/',
        element: <DefaultLayout />,
        children:[
            {
                index: true,
                path:'/',
                element: <Homepage />
            },
            {
                path:'/webshop',
                element:<Webshop />
            },
            {
                path:'/form',
                element:<Form />
            },
            {
                path:'/kosar',
                element:<Cart />
            }

        ]
    },

  
])

export default router;