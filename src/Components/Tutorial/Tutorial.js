import { Link } from 'react-router-dom';
import { useState } from 'react';

import './tutorial.css';

function Tutorial() {
    const tutorialList = [
        {
            img: 'https://cdn.luxstay.com/home/theme/theme_3_1583838065.jpg',
            path: 'cach-dat-phong-tren-luxstay',
        },
        {
            img: 'https://cdn.luxstay.com/home/theme/theme_4_1583838088.jpg',
            path: 'cach-su-dung-ma-giam-gia',
        },
        {
            img: 'https://cdn.luxstay.com/home/theme/theme_10_1583894021.jpg',
            path: 'huong-dan-thanh-toan-truc-tiep',
        },
        {
            img: 'https://cdn.luxstay.com/home/theme/theme_2_1583837926.jpg',
            path: 'huong-dan-thanh-toan-chuyen-khoan',
        },
        {
            img: 'https://cdn.luxstay.com/home/theme/theme_1_1584074526.jpg',
            path: 'cau-hoi-thuong-gap',
        },
    ];

    const [tutorialHead, setTutorialHead] = useState(0);
    const [tutorialEnd, setTutorialEnd] = useState(2);

    return (
        <div className="grid wide">
            <div className="container-tutorial">
                <div className="tutorial-text">
                    <h3 className="about__header">Hướng dẫn sử dụng</h3>
                    <p className="about__desc">Đặt chỗ nhanh, thanh toán đơn giản, sử dụng dễ dàng</p>
                </div>
                <div className="row container-tutorial__list">
                    <button
                        className={
                            tutorialHead === 0
                                ? 'container-tutorial__pre fas fa-chevron-left'
                                : 'container-tutorial__pre fas fa-chevron-left active'
                        }
                        onClick={() => {
                            setTutorialHead((pre) => (pre -= 1));
                            setTutorialEnd((pre) => (pre -= 1));
                        }}
                        disabled={tutorialHead <= 0 ? true : false}
                    ></button>
                    <button
                        className={
                            tutorialEnd === tutorialList.length
                                ? 'container-tutorial__next fas fa-chevron-right'
                                : 'container-tutorial__next fas fa-chevron-right active'
                        }
                        onClick={() => {
                            setTutorialEnd((pre) => (pre += 1));
                            setTutorialHead((pre) => (pre += 1));
                        }}
                        disabled={tutorialEnd >= tutorialList.length - 1 ? true : false}
                    ></button>
                    {tutorialList.map((tutorialItem, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    index >= tutorialHead && index <= tutorialEnd
                                        ? 'col l-4 m-6 c-12 container-tutorial__item active'
                                        : 'col l-4 m-6 c-12 container-tutorial__item'
                                }
                            >
                                <Link to={'tutorial/' + tutorialItem.path} className="container-tutorial__link">
                                    <div
                                        className="container-tutorial__img"
                                        style={{ backgroundImage: `url(${tutorialItem.img})` }}
                                    ></div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Tutorial;
