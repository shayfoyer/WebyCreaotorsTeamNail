import HomeImg from "../images/homeimg.png";
import Logo from "../images/logoimg.png";
import { styleLeft, styleRight } from "../styles/homeMobileStyle/bgHomeStyle";

const Home: any = () => { 
  
  return (
    <header id="#home" className="header" style={styleRight}>
     

      <nav className="header__nav_comp" style={styleLeft}>
        <a className="header__nav_link link-show" href="#home">
          Портфолио
        </a>
        <a className="header__nav_link link-show" href="#price">
          Прайс
        </a>
        <a className="header__nav_link link-show" href="#contact">
          Контакты
        </a>
      </nav>
      <div className="homeContainer">
        <div className="header__logo">
          <img className="header__logo_image" src={Logo} alt="logo name" />
          <p className="header__text">
            уютная забота о Ваших руках <br />в Кирьят Ям и Крайот
          </p>
        </div>
        <div className="header__image">
          <img className="header__image_full" src={HomeImg} alt="nail design" />
        </div>
      </div>
    </header>
  );
};

export default Home;
