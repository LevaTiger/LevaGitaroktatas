import './homepage.css'
import { useEffect, useRef, useState } from "react";

const Homepage = () => {
    const h3Ref = useRef(null);
    const [h3Visible, setH3Visible] = useState(false);
    
    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setH3Visible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (h3Ref.current) observer.observe(h3Ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="container-fluid m-0 p-0">
            <div className="home-layout">
                <div className="homepage-width">
                    <div className="homepage-text">
                        <h2 className='transparent'>Gitározz!</h2>
                        <h2>Élj!</h2>
                        <h2 className='colorful'>Zenélj!</h2>
                        <button className="action-btn">Gitárórát kérek</button>
                    </div>
                    <div className="homepage-img">
                        <img
                            src="/assets/img/heroImgLevi.jpg"
                            alt="Bognár Levente Kozmix Koncert"
                        />
                    </div>
                </div>
                    <p className='bi bi-arrow-down text-center text-light pb-4  mt-2'>
                        <a href="#rolam">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="mt-0 bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                            </svg>
                        </a>
                    </p>
            </div>
            <section className='short-info'>
                <div>
                    <h3
                      ref={h3Ref}
                      className={`fade-in-h3${h3Visible ? " visible" : ""}`}
                    >
                      Tanulj gitározni örömmel és határok nélkül!
                    </h3>
                    <div className="floating-guitars">
                        <div className="vortex-spin"></div>
                            <img  src="/assets/img/guitar.png" alt="Electric Guitar" />
                            <img  src="/assets/img/guitar-western.png" alt="Western Guitar" />
                            <img  src="/assets/img/cp-guitar-removebg.png" alt="Western Guitar" />
                            <img src="/assets/img/electric-guitar-gold.png" alt="Golden Guitar" />
                        
                    </div>
                </div>
                <div>
                    <p>Fedezd fel a gitározás izgalmas világát több zenei stílusban! <br />
                        Egy 60 perces <b>személyre szabott</b> óra alatt, megmutatom neked:
                    </p>
                    <ul>
                        <li><i>Alap technikákat</i></li>
                        <li><i>Akkord formákat</i></li>
                        <li><i>Dallamírás</i></li>
                        <li><i>Gitár szólókat</i></li>
                    </ul>
                </div>
            </section>
            <section id='rolam' className='about-me-bg'>
               <article className='about-me d-flex flex-column start'>
                <h2>Rólam:</h2>
                <p>
                    <b>2012</b> óta gitározok. Először nem hittem volna,<br />
                    hogy életem szerves része lesz. <br />
                    Azonban a tanulmányaim során mindig <br />
                    két dolog érdekelt:
                    Zene és a számítógépek
                </p>
                <p>
                    2022-ben végeztem a <i>Kőbányai Zenei Stúdió</i> <br />
                    gitáros képzésén, ahol volt szerencsém <br />
                    több stílust megismerni, illetve a zenekaromat is.
                </p>
                <p>
                    Az évek alatt rengeteg színpadi és oktatói tapasztalatot <br />
                    magamra szedtem, és most már tudom, hogy <br />
                    a gitározás nem csak egy hobbi, hanem <br />
                    egy életforma is.
                </p>
               </article>
                <figure>
                    <img
                        src="/assets/img/LevMuveszi.jpg"
                        alt="Bognár Levente"
                        className='about-me-bg-img'
                        />
                        <figcaption><i>Lunda Koncert</i></figcaption>
                </figure>
            </section>
        </div>
    )
}

export default Homepage;