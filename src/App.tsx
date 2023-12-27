import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Price from "./pages/Price";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import HomeMobile from "./pages/HomeMobile";
import "./styles/global.scss";
import "./App";

import { useMediaQuery } from "react-responsive";


function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 390px)` });
  return (
    <div className="body__page">
      {isMobile ? <HomeMobile /> : <Home />}
      <Photo img={""} />
      <Price />
      <Contact />
      <Footer name={""} link={""} />
    </div>
  );
}

export default App;
