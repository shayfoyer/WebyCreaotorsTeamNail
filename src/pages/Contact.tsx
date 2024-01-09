import Whatsapp from "../images/whatsapplogo.png";
import Map from "../images/locationVector.png";
import Waze from "../images/wazelogo.png";
import Phone from "../images/Telephone.png";
import Place from "../images/vectorLocation.png";
import Iframe from "react-iframe";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Contact: FC = () => {
    const [t] = useTranslation("global");
    return (
        <div
            id="contact"
            className="contact__contents"
        >
            <div className="contact__width">
                <h2 className="contact_title">{t('contact.h2')}</h2>
                <div className="contact_container centers">
                    <Iframe
                        className="contact_maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.8021968026924!2d35.07289437628081!3d32.85048858022666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151db707131e46a1%3A0x937aabb5cb26a0c2!2sSderot%20HaHistadrut%208%2C%20Kiryat%20Yam!5e0!3m2!1sru!2sil!4v1702395288213!5m2!1sru!2sil"
                        width="600"
                        height="600"
                        styles={{ border: "0px" }}
                        allow="fullscreen"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        target="_blank"
                        url=""
                    />

                    <div className="contact_right">
                        <div className="contact_adress">
                            <img
                                className="contact__icon contact_mapIcon"
                                src={Place}
                                alt="location icon"
                            />

                            <p className="contact_text">
                               {t('contact.p1')} <br />
                                קרית ים ,ההסתדרות 8
                            </p>
                        </div>
                        <div className="contact_phone">
                            <img
                                className="contact__icon contact_phone-mobileicon"
                                src={Phone}
                                alt="phone icon"
                            />
                            <a
                                className="contact_number"
                                href="tel:972532052976"
                            >
                                +972 53-205-2976
                            </a>
                        </div>
                    
                        <a
                            href="https://wa.me/+972532052976"
                            target="_blank"
                            rel="noreferrer"
                            className="contact_button-whatsapp"
                        >
                          
                            <p className="contact_button-text">
                            {t('contact.p2')}
                            </p>
                            <img
                                className="contact_button-mobileiconwapp"
                                src={Whatsapp}
                                alt="whattsapp logo"
                            />
                          
                        </a>
                        <a
                            href="https://maps.app.goo.gl/7eyDYbMuYvR7RVvaA"
                            target="_blank"
                            rel="noreferrer"
                            className=" contact_button-map"
                        >
                           
                            <p className="contact_button-text">
                            {t('contact.p3')}
                            </p>
                            <img
                                className="contact_button-mobileiconmap"
                                src={Map}
                                alt="map logo"
                            />
                            
                        </a>
                        <a
                            href="https://waze.com/ul/hsvbfyhm1j"
                            target="_blank"
                            rel="noreferrer"
                            className="contact_button-waze"
                        >
                  
                            <p className="contact_button-text">
                            {t('contact.p4')}
                            </p>
                            <img
                                className="contact_button-mobileiconwaze"
                                src={Waze}
                                alt="waze logo"
                            />
                          
                        </a>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Contact;
