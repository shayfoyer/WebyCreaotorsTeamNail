import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Price from "./pages/Price/Price";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import HomeMobile from "./pages/HomeMobile";
import "./styles/global.scss";
import "./App";

import { useMediaQuery } from "react-responsive";

function App() {
    const isMobile = useMediaQuery({ query: `(max-width: 1100px)` });

    return (
        <div className="body__page">
            {isMobile ? <HomeMobile /> : <Home />}
            <div className="mainInfo">
                <Photo />
                <Price />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
