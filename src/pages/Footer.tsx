import { FC } from "react";
import webyPNG from "../images/weby.png";

interface FooterProps {
    name: string;
    link: string;
}

const Linkedin: Array<FooterProps> = [
    {
        name: "Shay Foyer",
        link: "https://www.linkedin.com/in/shay-foyer-aa310118a/",
    },
    {
        name: "Daniel Elias",
        link: "http://www.linkedin.com/in/danieleliastech",
    },
    {
        name: "Kristina Stasevich",
        link: "https://www.linkedin.com/in/kristina-stasevich-7616a8186/",
    },
    {
        name: "Voronina Julia",
        link: "https://www.linkedin.com/in/julia-voronina-660a6a28b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
];

const Footer: FC = () => {
    return (
        <footer>
            <div className="footer__weby">
                <p className="footer__weby_create">© Created by Weby</p>
                {Linkedin.map((item, i) => (
                    <a
                        className="footer__link_name"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        key={i}
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            <img
                src={webyPNG}
                alt="Weby Logo"
                className="footer__weby_logo"
            />
        </footer>
    );
};

export default Footer;
