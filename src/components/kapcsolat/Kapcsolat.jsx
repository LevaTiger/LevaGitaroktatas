import { FaEnvelope, FaInstagram, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import './kapcsolat.css';
import { goToContact, goToVideosHp } from "../../features/gotocontact/goToContact";


const Kapcsolat = () => {
    return (
        <div className="kapcsolat-container">
            <div className="kapcsolat-content">
                <h1>Kapcsolat</h1>
                <p><b>Nézz pár videót rólam!</b></p>
                <button onClick={goToVideosHp} className="action-btn mt-1 mb-4">Videók</button>
                <p className="text-center"><b>Keress bizalommal E-mail címemen, vagy a közösségi oldalaimon!</b></p>

                <div className="kapcsolat-card">
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
    );
};

export default Kapcsolat;