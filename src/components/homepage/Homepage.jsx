import { FaEnvelope, FaInstagram, FaTiktok } from 'react-icons/fa';
import { goToContact, goToTeaching } from '../../features/gotocontact/goToContact';
import './homepage.css'
import { useEffect, useRef, useState } from "react";

const Homepage = () => {
    const h3Ref = useRef(null);
    const [h3Visible, setH3Visible] = useState(false);

    // For video animation on scroll
    const videoRefs = [useRef(null), useRef(null), useRef(null)];
    const [videoVisible, setVideoVisible] = useState([false, false, false]);

  

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

    useEffect(() => {
        const observers = videoRefs.map((ref, idx) => {
            return new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVideoVisible(prev => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                    }
                },
                { threshold: 0.2 }
            );
        });

        videoRefs.forEach((ref, idx) => {
            if (ref.current) observers[idx].observe(ref.current);
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [videoRefs]);

    return (
        <div id='top' className="container-fluid m-0 p-0">
            <div className="home-layout">
                <div className="homepage-width">
                    <div className="homepage-text">
                        <h2 className='transparent'>Gitározz!</h2>
                        <h2>Élj!</h2>
                        <h2 className='colorful'>Zenélj!</h2>
                        <button onClick={goToTeaching} className="action-btn">Gitárórát kérek</button>
                        <button onClick={goToContact} className="action-btn">Elérhetőség</button>
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
                        <img src="/assets/img/guitar.png" alt="Electric Guitar" />
                        <img src="/assets/img/guitar-western.png" alt="Western Guitar" />
                        <img src="/assets/img/cp-guitar-removebg.png" alt="Western Guitar" />
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
            <section id='videok' className="videos-wrapper d-flex flex-column align-items-center gap-4 ">
                <h2 className="text-center"><b>Koncert és dal videók</b></h2>
                <div className='videos'>
                    <div
                        className={`video-container${videoVisible[0] ? " visible" : ""}`}
                        ref={videoRefs[0]}
                    >
                        <iframe width={'50%'} height="315" src="https://www.youtube.com/embed/rda157bhgfU?si=PY_tCVf6iEPGh0me" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div
                        className={`video-container${videoVisible[0] ? " visible" : ""}`}
                        ref={videoRefs[1]}
                    >
                        <iframe width={'50%'} height="315" src="https://www.youtube.com/embed/A0w6-67Ky60?si=DKdulDPciOUodpeY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div
                        className={`video-container${videoVisible[0] ? " visible" : ""}`}
                        ref={videoRefs[1]}
                    >
                        <iframe width={'50%'} height="315" src="https://www.youtube.com/embed/qMrjUGlzc0k?si=MGOdIqHx5-FpmlPV&amp;start=1634" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div
                        className={`video-container${videoVisible[0] ? " visible" : ""}`}
                        ref={videoRefs[2]}
                    >
                        <iframe width={'50%'} height="315" src="https://www.youtube.com/embed/XzDNYyzWi5M?si=bfcIg7oXdV4mXxHF" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div
                        className={`video-container${videoVisible[2] ? " visible" : ""}`}
                        ref={videoRefs[3]}
                    >
                        <iframe width={"50%"} height="315" src="https://www.youtube.com/embed/6GZssogaSxU?si=XpDjrNqmi6iLqTVe" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div
                        className={`video-container${videoVisible[1] ? " visible" : ""}`}
                        ref={videoRefs[4]}
                    >
                        <iframe width={'50%'} height="315" src="https://www.youtube.com/embed/tlIr4ueohvw?si=48mz8PTlivP8PhhF" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div
                        className={`video-container${videoVisible[2] ? " visible" : ""}`}
                        ref={videoRefs[5]}
                    >
                        <iframe width={"50%"} height="315" src="https://www.youtube.com/embed/BEyRHlDR3Jg?si=ZzvRKAFFHcp-_G2s" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
            <div className=" bg-info bg-gradient bg-opacity-25 ">
                <div className='call-buttons d-flex flex-row align-items-center justify-content-center p-4 gap-2'>
                    <button onClick={goToTeaching} className="action-btn">Gitárórát kérek</button>
                    <button onClick={goToContact} className="action-btn">Elérhetőség</button>
                </div>
                <div className="infos d-flex flex-column align-items-center justify-content-center gap-4">
                      <div className=" kapcsolat-card mb-4 ">
                                        <div className="kapcsolat-item">
                                            <FaEnvelope className="kapcsolat-icon" />
                                            <a href="mailto:gitaroktatas.levente@gmail.com">gitaroktatas.levente@gmail.com</a>
                                        </div>
                                        <div className="kapcsolat-item">
                                            <FaInstagram className="kapcsolat-icon" />
                                            <a href="https://instagram.com/levabognar" target="_blank">@levabognar</a>
                                        </div>
                                        <div className="kapcsolat-item">
                                            <FaTiktok className="kapcsolat-icon" />
                                            <a href="https://www.tiktok.com/@levabognar" target="_blank">@levabognar</a>
                                        </div>
                                    </div>
                </div>
            </div>
            <section className="me-developer d-flex flex-column align-items-center justify-content-center gap-4 text-center mt-2">
                <h4>Extra információk</h4>
                <p>
                    <b>2024-ben a Soter-Line Oktatási Központban</b> kezdtem <b>Front end fejlesztői</b> képzést, <br />
                    ahol a legújabb technológiákat tanultam. <br />
                    Ez az oldal például <b>React</b>-ben készült. <br />
                    Azóta több projektet is készítettem, <br />
                    és folyamatosan bővítem a tudásomat. <br />
                    <b>2025</b> Áprilisában államilag elismert vizsgát tettem. <br />
                </p>
                <p className='lead '>
                    <b>
                        Amennyiben ezzel kapcsolatban érdeklődnél, <br />
                        keress bátran a <a href="mailto:bognar.levente99@gmail.com"> bognar.levente99@gmail.com <sup>Katt</sup></a> email címen, <br />
                        vagy a <a target='_blank' href="https://www.linkedin.com/in/levente-bogn%C3%A1r-32a67226a/">LinkedIn <sup>Katt</sup></a> profilomon.
                    </b>
                </p>

            </section>
        </div>
    )
}

export default Homepage;