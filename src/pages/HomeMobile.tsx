import Logo from "../images/logoimg.png";
import RightLeave from "../images/leftLeave.png";
import Leftleave from "../images/rightLeave.png";
import { styleHome } from "../styles/homeMobileStyle/bgHomeStyle";
import { FC } from "react";

const Home: FC = () => {
    return (
        <header
            id="#home"
            className="header_mobile"
            style={styleHome}
        >
            <div className="header__logo_mobile">
                <img
                    className="header__logo_image_mobile"
                    src={Logo}
                    alt="logo name"
                />
                <img
                    className="leftLeave"
                    src={RightLeave}
                    alt="left leave"
                />
                <p className="header__text_mobile">
                    уютная забота о Ваших руках <br />в Кирьят Ям и Крайот
                </p>
                <img
                    className="rightLeave"
                    src={Leftleave}
                    alt="right leave"
                />
            </div>

            <nav className="header__nav_mobile">
                <a
                    className="header__nav_link_mobile"
                    href="#home"
                    rel="noreferrer"
                >
                    Портфолио
                </a>
                <a
                    className="header__nav_link_mobile"
                    href="#price"
                    rel="noreferrer"
                >
                    Прайс
                </a>
                <a
                    className="header__nav_link_mobile"
                    href="#contact"
                    rel="noreferrer"
                >
                    Контакты
                </a>
                <div id="google_translate_element"></div>
            </nav>
        </header>
    );
};

export default Home;
