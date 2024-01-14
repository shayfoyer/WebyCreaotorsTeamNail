import { FC,} from "react";
import HomeImg from "../images/homeimg.png";
import Logo from "../images/logoimg.png";
import RightLeave from "../images/rightLeave.png";
import Leftleave from "../images/leftLeave.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


const Home: FC = () => { 
       const [t, i18n] = useTranslation("global");
    interface Link {
    link: string;
    text: string;
}

const navLink: Array<Link> = [
    { link: "#home", text: `${t('header.link.home')}`},
    { link: "#price", text: `${t('header.link.price')}` },
    { link: "#contact", text: `${t('header.link.contact')}` },
];



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
            className="header"
        > 
        <div className="translateArea">
            <button className="translate" onClick={()=>handleChangeLang("en")}>
                    EN
            </button>
            <button className="translate" onClick={()=>handleChangeLang("he")}>
                    HE
            </button>
            <button className="translate" onClick={()=>handleChangeLang("ru")}>
                   RU
            </button>
            </div>
            <nav className="header__nav_comp"> 
          

            
                {navLink.map((link) => (
                    <a
                        href={link.link}
                        className="header__nav_link link-show"
                    >
                        {link.text}
                    </a>
                ))}
             
            </nav>

            <div className="homeContainer">
                <img
                    className="homeContainer__rightLeave"
                    src={RightLeave}
                    alt="left leave"
                />
                <img
                    className="homeContainer__leftLeave"
                    src={Leftleave}
                    alt="right leave"
                />
                <div>
                    <img
                        className="header__logo_image"
                        src={Logo}
                        alt="logo name"
                    />
                    <p className="header__text">
                       {t("header.p")}
                    </p>
                </div>
            </div>
            <div className="header__image">
                <img
                    className="header__image_full"
                    src={HomeImg}
                    alt="nail design"
                />
            </div>
        </header>
    );
};

export default Home;
