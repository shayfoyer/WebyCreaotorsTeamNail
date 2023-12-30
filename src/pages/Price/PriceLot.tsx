import React, { FC } from "react";

interface PriceLotProps {
    text: string;
    price: string;
}

const PriceLot: FC<PriceLotProps> = ({ text, price }) => {
    return (
        <div className="price__lot">
            <p>{text}</p>
            {/* <div style={{ backgroundColor: "grey" }}>...</div> */}
            {/* ..................................... */}
            <p>{price}₪</p>
        </div>
    );
};

export default PriceLot;
