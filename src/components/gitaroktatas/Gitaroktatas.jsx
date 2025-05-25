import { useEffect, useRef, useState } from 'react';
import { goToContact } from '../../features/gotocontact/goToContact';
import './gitaroktatas.css';

const Gitaroktatas = () => {

        const [videoVisible, setVideoVisible] = useState([false, false, false]);
        const videoRefs = [useRef(null), useRef(null), useRef(null)];


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
        <div className="gitaroktatas d-flex flex-column align-items-center justify-content-center text-center w-100 border-top pt-4 bg-primary bg-gradient bg-opacity-25">
                <h1><span><img src="/assets/img/guitar.png" width={`34px`} alt="Elektromos gitár" /></span> Gitároktatás <span><img src="/assets/img/guitar.png" width={`34px`} alt="Elektromos gitár" /></span></h1>
            <div className="oktatas-layout " >
                <div className="oratartalma">
                    <h3>Mit tanulunk egy órán?</h3>
                    <ul>
                        <li>
                            Skálák
                        </li>
                        <li>
                            Akkordok
                        </li>
                        <li>
                            Zeneelmélet{`(Semmi nehéz)`}
                        </li>
                        <li>
                            Technikák
                        </li>
                        <li>
                            Fültorna
                        </li>
                        <li>
                            Gitárszólók
                        </li>
                        <li>
                            Improvizáció
                        </li>
                        <li>
                            Zene élvezete
                        </li>
                    </ul>
                </div>
                <div
                        className={`video-container${videoVisible[0] ? " visible" : ""}`}
                        ref={videoRefs[0]}
                    >
                        <iframe width={'100%'} height="315" src="https://www.youtube.com/embed/rda157bhgfU?si=PY_tCVf6iEPGh0me" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

            </div>
                <button onClick={goToContact} className="action-btn mb-4">Elérhetőség</button>
            <div className="oramenete m-4">
                <h3>Hogy néz ki egy óra?</h3>
                <p>Egy óra menete alapvetően nagyon egyszerűen történik: <br />
                Egy kis beszélgetéssel ráhangolódással kezdünk, majd elkezdjük az új anyagot tanulni. <br />
                Amennyiben úgy érzed, elakadtál, szívesen segítek, hogy továbblépj. <br />
                Az órák során fontos lesz, hogy együtt játszunk. <br />
                A legfőbb célom, hogy élvezd a zenélést és a tanulást. <br />
                Ha volt bármi kérdés, a gyakorolni valót megbeszéljük.
                </p>
            </div>

            
        </div>
    );
}

export default Gitaroktatas;