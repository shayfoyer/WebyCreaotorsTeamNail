import Whatsapp from "../images/whatsapplogo.png"
import {FC} from 'react'

const Price:FC = () => {

    return (
<div id="price" className="contentImage" >
  <div className="bg">
<h2 className="price_title">Прайс<div className="span hide-mobile"></div></h2>

</div>
<div className="price_container center">
  <div className="price-left">
    <h3 className="price-left_title">Маникюр</h3>
    <p className="price-left_menu">
      <p>
      Маникюр.....................................70 ₪
      </p>
      <p>
      Маникюр + гель-лак.............120 ₪
      </p>
      <p>
      Маникюр + укрепление
       </p>
      <p>
      гелем...........................................150 ₪
     </p>
     <p>
      Мужской маникюр..................80 ₪
     </p> 
     <p>
      Снятие чужой работы..........+20 ₪
     </p>
  </p>

    <h3 className="price-left_title">Наращивание</h3>
    <p className="price-left_menu">
      <p>
      Однотонное................................70 ₪
      </p>
      <p>
      Коррекция...................................70 ₪
      </p>
      <p>
      Полное снятие...........................70 ₪
    </p>
    </p>
  </div>
  <div className="price-right">
    <h3 className="price-right_title">Дополнительно</h3>
    <p className="price-right_menu">
      <p className="text">
      Ремонт трещины <p className="size">(1 шт)</p>.................70 ₪
      </p>
      <p className="text">
      Наращивание <p className="size">(1 шт)</p>........................15 ₪
      </p >
      <p className="text">
      Простой дизайн <p className="size">(1 шт)</p>......................5 ₪
      </p>
      <p className="text">
      Простой дизайн <p className="size">(все пальцы)</p>......30 ₪
      </p>
      <p className="text">
      Сложный дизайн <p className="size">(1 шт)</p>..................10 ₪
      </p>
      <p className="text">
      Сложный дизайн <p className="size">(все пальцы)</p>....40 ₪
    </p>
    </p>
<div className="hide-mobile">
     <a 
         href="https://wa.me/+972532052976" target="_blank" rel="noreferrer">
      <p className="price_button">
        <p className="price_button-text"
          >Уточнить детали 
          в WhatsApp</p>
          <img
          className="price_button-logo"
          src={Whatsapp}
          alt="whattsapp logo"
        />
      </p>
    </a>
     </div>
  </div>
</div>
</div>
);
};

export default Price;