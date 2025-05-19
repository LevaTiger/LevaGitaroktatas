import { Outlet, useLocation } from "react-router"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import { createContext, useEffect, useState } from "react"
import Loading from "../../features/loading/Lodaing"; //fake loading ha kell esetleg... viszont nincs rá szükség jelenleg

export const JsonContext = createContext();


const DefaultLayout=()=>{

    const [jsonData, setJsonData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const location = useLocation();

    // useEffect(() => {
    //     setLoading(true);
    //     const timer = setTimeout(() => setLoading(false), 700); // fake loading, adjust as needed
    //     return () => clearTimeout(timer);
    // }, [location]);

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch('/assets/json/kekszek.json');
            const jsonContent = await response.json();
            setJsonData(jsonContent)
        }
        fetchData();
    }, [])


    return(
        <JsonContext.Provider value={jsonData}>
            {/* {loading && <Loading />} */}
            <Header />
                <Outlet />
            <Footer />
        </JsonContext.Provider>
    )
}

export default DefaultLayout;