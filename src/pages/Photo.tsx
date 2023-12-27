import Photo1 from "../images/potrfolio1.png"
import Photo2 from "../images/portfolio2.png"
import Photo3 from "../images/portfolio3.png"
import Photo4 from "../images/portfolio4.png"
import PhotoLeft from "../images/leftPhoto.png"
import Insta from "../images/instalogo.png"
import {FC} from 'react'

interface PhotoProps{
  img:string;
}

const images:Array<PhotoProps>=[{
  img:Photo1
},
{img:Photo2},
{img:Photo3},
{img:Photo4}
]
const Photo:FC<PhotoProps> = ({img}) => {
   
    return (
      <div className="content photo">
      
       <div className="bg">
     
      <h2 className="photo_title">Портфолио <div className="spanMobile"></div> </h2>
       
      </div> 
       
      <div className="photo_container center">

        <div className="photo_grid">
          {images.map ((item, i) => (
              <img src={item.img} alt={item.img} key={i} 
            className="photo_img"
            />
            ))}
            </div>
      
        <div className="photo_link">
          <img
            className="photo_image"
            src={PhotoLeft}
            alt="fifth nail"
          />
          <a href="https://www.instagram.com/kiryatyam_nails" target="_blank" rel="noreferrer">
            <button className="photo_button-link">
              <p className="photo_button-text"
                >Больше работ
                в моем Insagram</p>
             
              <img
                className="main__photo_button-mobilelogo"
                src={Insta}
                alt="instagram logo"
              />
            </button>
          </a>
        </div>
      </div>
</div>
  );
  };
  
  export default Photo;