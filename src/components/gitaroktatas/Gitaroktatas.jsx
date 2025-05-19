import './gitaroktatas.css';

const Gitaroktatas = () => {
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
                            Zeneelmélet{`(Semmi nehézre)`}
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
                <div className="oramenete">
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
        </div>
    );
}

export default Gitaroktatas;