import { FC } from "react";
import HomeImg from "../images/homeimg.png";
import Logo from "../images/logoimg.png";
import RightLeave from "../images/rightLeave.png";
import Leftleave from "../images/leftLeave.png";

interface Link {
    link: string;
    text: string;
}

const navLink: Array<Link> = [
    { link: "#home", text: "Портфолио" },
    { link: "#price", text: "Прайс" },
    { link: "#contact", text: "Контакты" },
];

const Home: FC = () => {
    return (
        <header
            id="#home"
            className="header"
        >
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
                        уютная забота о Ваших руках <br />в Кирьят Ям и Крайот
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
