import { Outlet } from "react-router"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import { createContext, useEffect, useState } from "react"

export const JsonContext = createContext();


const DefaultLayout=()=>{

    const [jsonData, setJsonData] = useState([]);

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
            <Header />
                <Outlet />
            <Footer />
        </JsonContext.Provider>
    )
}

export default DefaultLayout;