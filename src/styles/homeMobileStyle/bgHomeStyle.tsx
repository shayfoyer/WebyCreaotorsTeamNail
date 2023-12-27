import RightLeave from "../../images/leftLeave.png";
import Leftleave from "../../images/rightLeave.png";
import VectorBg from "../../images/VectorHomeMobile.png";

export const styleLeft = {
  backgroundImage: `url(${Leftleave})`,
  zIindex: "-1",
  fontSize: "50px",
  backgroundSize: "367px 367px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top 90px left 0px",
};

export const styleRight = {
  backgroundImage: `url(${RightLeave})`,
  fontSize: "50px",
  zIndex: "-1",
  backgroundSize: "367px 367px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom 62px right 576px",
};

export const styleHome = {
  backgroundImage: `url(${VectorBg})`,
  fontSize: "50px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
};
