import Whatsapp from "../images/whatsapplogo.png";
import { FC} from "react";

import { useTranslation } from "react-i18next";

const Price: FC = () => {
    
    const [t] = useTranslation("global");

    
     const priceListManicure = [
    { text: `${t('prices.mani')}`, price: "70" },
    { text: `${t('prices.gelPolish')}`, price: "120" },
    { text: `${t('prices.gel')}`, price: "150" },
    { text: `${t('prices.men')}`, price: "80" },
    { text: `${t('prices.down')}`, price: "+20" },
];

 const priceListBuildingUp = [
    { text: `${t('prices.plain')}`, price: "70" },
    { text: `${t('prices.correction')}`, price: "70" },
    { text: `${t('prices.full')}`, price: "70" },
];

 const priceListMore = [
    { text: `${t('prices.repair')}`, price: "70" },
    { text: `${t('prices.extension')}`, price: "15" },
    { text: `${t('prices.simple')}`, price: "5" },
    { text: `${t('prices.simple2')}`, price: "30" },
    { text: `${t('prices.complex')}`, price: "10" },
    { text: `${t('prices.complex2')}`, price: "40" },
];

    return (
        <div
            id="price"
            className="contentImage"
        >
            <div className="price__width">
                <h2 className="price_title">{t('prices.h2')}</h2>
                <div className="price_container center">
                    <div className="price-left">
                        <h3 className="price__header price-left_title">
                        {t('prices.title')}
                        </h3>
                        <p className="price-left_menu">
                            {priceListManicure.map((pri) => (
                          
                                   
                                        <div className={"price__lot"} >
                                        <p>{pri.text} </p>
                                        <p> {pri.price}₪</p>    
                                        </div> 
                         
                            ))}
                        </p>

                        <h3 className="price-left_title">{t('prices.h3')}</h3>
                        <p className="price-left_menu">
                            {priceListBuildingUp.map((pri) => (
                               
                                <div className="price__lot">
                                      <p>{pri.text} </p>
                                     <p> {pri.price}₪</p>     
                                </div>
                            ))}
                        </p>
                    </div>
                    <div className="price-right">
                        <h3 className="price-right_title">{t('prices.left')}</h3>
                        <p className="price-right_menu">
                            {priceListMore.map((pri) => (
                            
                                <div className="price__lot">
                                      <p>{pri.text} </p>
                                         <p> {pri.price}₪</p>   
                                </div>
                            ))}
                        </p>
                       
                        <a
                            href="https://wa.me/+972532052976"
                            target="_blank"
                            rel="noreferrer"
                            className="price_button"
                        >
                            <p className="price_button-text">
                            {t('prices.WhatsApp')}
                            </p>
                            <img
                                className="price_button-logo"
                                src={Whatsapp}
                                alt="whattsapp logo"
                            />
                        </a>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;
