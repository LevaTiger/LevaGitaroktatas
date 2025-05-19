import { createBrowserRouter } from "react-router";
import Homepage from "../components/homepage/Homepage";
import DefaultLayout from "../components/defaultLayout/DefaultLayout";
import Gitaroktatas from "../components/gitaroktatas/Gitaroktatas";


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
                path:'/gitaroktatas',
                element:<Gitaroktatas />
            },

        ]
    },

  
])

export default router;