import { useState } from 'react';
import { Link } from 'react-router-dom';

import './slider.css';

function Slider() {
    const [indexSlider, setIndexSlider] = useState(1);

    return (
        <div className="grid wide">
            <div className="container-slider">
                <Link to="/vi/homestay" className="container-slider__link">
                    <img
                        src="https://nhattrinh17.github.io/assets/img/slider/slider1.png"
                        alt=""
                        className={indexSlider === 1 ? 'container-slider__img active' : 'container-slider__img '}
                    />
                    <img
                        src="https://nhattrinh17.github.io/assets/img/slider/slider2.png"
                        alt=""
                        className={indexSlider === 2 ? 'container-slider__img active' : 'container-slider__img '}
                    />
                    <img
                        src="https://nhattrinh17.github.io/assets/img/slider/slider3.png"
                        alt=""
                        className={indexSlider === 3 ? 'container-slider__img active' : 'container-slider__img '}
                    />
                </Link>
                <div className="container-slider__input">
                    <input
                        type="radio"
                        name="slider"
                        id="slider1"
                        checked={indexSlider === 1 ? true : false}
                        onChange={(e) => setIndexSlider(1)}
                    />
                    <input
                        type="radio"
                        name="slider"
                        id="slider2"
                        checked={indexSlider === 2 ? true : false}
                        onChange={(e) => setIndexSlider(2)}
                    />
                    <input
                        type="radio"
                        name="slider"
                        id="slider3"
                        checked={indexSlider === 3 ? true : false}
                        onChange={(e) => setIndexSlider(3)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Slider;
