import { FC } from "react";

interface FooterProps {
  name: string;
  link: string;
}

const Linkedin: Array<FooterProps> = [
  {
    name: "Shay Foyer",
    link: "https://www.linkedin.com/in/shay-foyer-aa310118a/",
  },
  { name: "Daniel Elias", link: "http://www.linkedin.com/in/danieleliastech" },
  {
    name: "Kristina Stasevich",
    link: "https://www.linkedin.com/in/kristina-stasevich-7616a8186/",
  },
  {
    name: "Voronina Julia",
    link: "https://www.linkedin.com/in/julia-voronina-660a6a28b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];
const Footer: FC<FooterProps> = ({ name, link }) => {
  return (
    <div className="footer">
      <footer>
        <p className="footer__link">
          © Created by Weby: prog:
          <div>
            {Linkedin.map((item, i) => (
              <a
                className="footer__link_name"
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={i}
              >
                {item.name},{" "}
              </a>
            ))}
          </div>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
