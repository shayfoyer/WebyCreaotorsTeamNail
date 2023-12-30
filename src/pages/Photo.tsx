import Photo1 from "../images/potrfolio1.JPG";
import Photo2 from "../images/portfolio2.JPG";
import Photo3 from "../images/portfolio3.JPG";
import Photo4 from "../images/portfolio4.JPG";
import PhotoLeft from "../images/leftPhoto.png";
import Insta from "../images/instalogo.png";
import { FC } from "react";

interface PhotoProps {
    img: string;
}

const images: Array<PhotoProps> = [
    { img: Photo1 },
    { img: Photo2 },
    { img: Photo3 },
    { img: Photo4 },
];

const Photo: FC = () => {
    return (
        <div
            id="home"
            className="content photo"
        >
            <div className="photo__width">
                <h2 className="photo_title">Портфолио</h2>

                <div className="photo_container center">
                    <div className="photo_grid">
                        {images.map((item, i) => (
                            <img
                                src={item.img}
                                alt={item.img}
                                key={i}
                                className="photo_img"
                            />
                        ))}
                        <img
                            className="photo_image"
                            src={PhotoLeft}
                            alt="fifth nail"
                        />
                        <div className="photo__insta__btn">
                            <a
                                href="https://www.instagram.com/kiryatyam_nails"
                                target="_blank"
                                rel="noreferrer"
                                className="photo__insta__link"
                            >
                                <p className="photo_button-text">
                                    Больше работ в моем Insagram
                                </p>
                                <img
                                    className="main__photo_button-mobilelogo"
                                    src={Insta}
                                    alt="instagram logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photo;
