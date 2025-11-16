import fondo from '../../assets/images/header-bg.jpg';
import Navbar from '../Navbar/Navbar';
import './Header.css';


function Header() {
    return (
        <header
            className="header-container"
            style={{backgroundImage: `url(${fondo})`}}
        >
            <div className="header-overlay">
                <Navbar/>
            </div>
        </header>
    );
}


export default Header;