import Logo from "../images/logoimg.png";
import RightLeave from "../images/leftLeave.png";
import Leftleave from "../images/rightLeave.png";
import { styleHome } from "../styles/homeMobileStyle/bgHomeStyle";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Home: FC = () => {
    const [t, i18n] = useTranslation("global");
    const handleChangeLang= (lang:string)=>{
        i18n.changeLanguage(lang);
    };
    useEffect(() => {
        const dir = i18n.dir(i18n.language);
        document.documentElement.dir = dir;
     }, [i18n, i18n.language]);
    return (
        <header
            id="#home"
            className="header_mobile"
            style={styleHome}
        >
              <div className="translateAreaMobile">
            <button className="translateMobile" onClick={()=>handleChangeLang("ru")}>
                    Русский
            </button>
            <button className="translateMobile" onClick={()=>handleChangeLang("en")}>
                    English
            </button>
            <button className="translateMobile" onClick={()=>handleChangeLang("he")}>
                   עברית
            </button>
            </div>
    
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
                    {t('header.p')}
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
                    {t('header.link.home')}
                </a>
                <a
                    className="header__nav_link_mobile"
                    href="#price"
                    rel="noreferrer"
                >
                    {t('header.link.price')}
                </a>
                <a
                    className="header__nav_link_mobile"
                    href="#contact"
                    rel="noreferrer"
                >
                    {t('header.link.contact')}
                </a>
                <div id="google_translate_element"></div>
            </nav>
        </header>
    );
};

export default Home;
