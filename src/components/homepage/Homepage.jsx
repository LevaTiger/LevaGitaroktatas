import './homepage.css'

const Homepage = () => {
    return (
        <div className="container-fluid m-0 p-0">
            <div className="home-layout">
                <div className="homepage-width">
                    <div className="homepage-text">
                        <h2 className='transparent'>Gitározz</h2>
                        <h2>Élj</h2>
                        <h2 className='colorful'>Zenélj!</h2>
                        <button className="action-btn">Gitárórát kérek</button>

                    </div>
                    <div className="homepage-img">
                        <img
                            src="/assets/img/heroImgLevi.jpg"
                            alt="Gitározás"
                        />
                    </div>
                </div>
            </div>
            <div className='homepage-articles'>
                <p><b>Rólam:</b></p>
                Rólam:

                2013 óta gitározom, és azóta a zene életem szerves részévé vált. Jelenleg a Lunda zenekar és a Kozmix tagjaként tevékenykedem, ahol különböző stílusokban és hangzásvilágokban mutathatom meg a tehetségemet. Számos fellépésen részt vettem, és büszkén mondhatom, hogy Erdélyben is bemutatkoztunk mindkét produkcióval, ahol a közönség szívébe zártuk magunkat.

                Egy különleges élményem is volt, amikor a Lunda zenekarral egy turnéra indultunk, amely során egy elhagyatott faluba látogattunk el, ahol a helyiek meséltek nekünk a régi idők zenéjéről. Az egyik este, miközben a tűz körül ültünk, egy öreg néni előkerült egy régi gitárral, és elkezdett játszani egy ősi népdalt. A zene varázsa annyira magával ragadott minket, hogy a zenekar tagjai is csatlakoztak hozzá, és egy spontán jam session alakult ki. Az este végére a helyiek és mi is egy nagy közösséggé váltunk, és a zene ereje összekötött minket, függetlenül a távolságtól és a különböző kultúráktól. Ez az élmény örökre megmarad a szívemben, és megerősítette bennem a zene iránti szenvedélyt.
            </div>
        </div>
    )
}

export default Homepage;