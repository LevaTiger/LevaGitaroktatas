import { createBrowserRouter } from "react-router";
import Homepage from "../components/homepage/Homepage";
import DefaultLayout from "../components/defaultLayout/DefaultLayout";
import Gitaroktatas from "../components/gitaroktatas/Gitaroktatas";
import Kapcsolat from "../components/kapcsolat/Kapcsolat";
import Kepek from "../components/kepek/Kepek";


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
            {
                path:'/kapcsolat',
                element: <Kapcsolat />
            },
            {
                path:'/kepek',
                element: <Kepek />
            }

        ]
    },

  
])

export default router;