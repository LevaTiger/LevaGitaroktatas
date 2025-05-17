import { useContext, useEffect, useState } from 'react';
import ProductCard from '../../features/productCard/ProductCard';
import './webshop.css'
import { JsonContext } from '../defaultLayout/DefaultLayout';

const Webshop =()=>{

    const [webshopData, setWebshopData] = useState([]);

    const jsonData = useContext(JsonContext)

    useEffect(()=>{

        const fetchData= async ()=>{
            const response = await fetch('/assets/json/kekszek.json')
            const webshopItems = await response.json();
            setWebshopData(webshopItems);
        }
        fetchData();
    }, [])

    console.log("Webshop Data:", webshopData);

    return(
        <div className='container webshop'>
            <div className="sidebar">
                <div className="searchbar">
                    <input type="search" placeholder='Parfümök keresése...' />
                    <button>KERESÉS</button>
                </div>
                    <div>
                        <input type="checkbox" id='women-parfumes' />
                        <label htmlFor="women-parfumes">Finom kekszek</label>

                    </div>
                    <div>
                        <input type="checkbox" id='men-parfumes' />
                        <label htmlFor="men-parfumes">Hagyományos kekszek</label>

                    </div>
                    <div>
                        <input type="checkbox" id='unisex-parfumes' />
                        <label htmlFor="unisex-parfumes">80s évek kekszei</label>

                    </div>
                    <div>
                        <input type="checkbox" id='onsale-parfumes' />
                        <label htmlFor="onsale-parfumes">Future kekszek</label>

                    </div>
              
            </div>
            <div className="product-list">
                {webshopData.map((item, index)=> {
                    console.log(item); // Debugging: elemek ellenőrzése
                    return <ProductCard key={index} product={item} />;
                })}
            </div>
        </div>
    )
}

export default Webshop;