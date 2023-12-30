import Whatsapp from "../../images/whatsapplogo.png";
import { FC } from "react";
import {
    priceListBuildingUp,
    priceListManicure,
    priceListMore,
} from "./priceList";
import PriceLot from "./PriceLot";

const Price: FC = () => {
    return (
        <div
            id="price"
            className="contentImage"
        >
            <div className="price__width">
                <h2 className="price_title">Прайс</h2>
                <div className="price_container center">
                    <div className="price-left">
                        <h3 className="price__header price-left_title">
                            Маникюр
                        </h3>
                        <p className="price-left_menu">
                            {priceListManicure.map((pri) => (
                                <PriceLot {...pri} />
                            ))}
                        </p>

                        <h3 className="price-left_title">Наращивание</h3>
                        <p className="price-left_menu">
                            {priceListBuildingUp.map((pri) => (
                                <PriceLot {...pri} />
                            ))}
                        </p>
                    </div>
                    <div className="price-right">
                        <h3 className="price-right_title">Дополнительно</h3>
                        <p className="price-right_menu">
                            {priceListMore.map((pri) => (
                                <PriceLot {...pri} />
                            ))}
                        </p>
                        {/* <div className="hide-mobile"> */}
                        <a
                            href="https://wa.me/+972532052976"
                            target="_blank"
                            rel="noreferrer"
                            className="price_button"
                        >
                            <p className="price_button-text">
                                Уточнить детали в WhatsApp
                            </p>
                            <img
                                className="price_button-logo"
                                src={Whatsapp}
                                alt="whattsapp logo"
                            />
                        </a>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;
