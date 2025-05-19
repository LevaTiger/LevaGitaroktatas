import { FaEnvelope, FaInstagram, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import './kapcsolat.css';


const Kapcsolat = () => {
    return (
        <div className="kapcsolat-container">
            <h1>Kapcsolat</h1>
            <div className="kapcsolat-card">
                <div className="kapcsolat-item">
                    <FaEnvelope className="kapcsolat-icon" />
                    <a href="gitaroktatas.levente@gmail.com">gitaroktatas.levente@gmail.com</a>
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
    );
};

export default Kapcsolat;