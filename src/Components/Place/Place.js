import { useState } from 'react';
import { Link } from 'react-router-dom';
import './place.css';

function Place() {
    const places = [
        {
            src: 'https://cdn.luxstay.com/home/location/location_1_1559734709.png',
            name: 'Hà Nội',
            path: '/ha-noi',
            quantity: 2044,
        },
        {
            src: 'https://cdn.luxstay.com/home/location/location_5_1559735011.png',
            name: 'Tp.Hồ Chí Minh',
            path: '/ho-chi-minh',
            quantity: 1769,
        },
        {
            src: 'https://cdn.luxstay.com/home/location/location_10_1559303118.png',
            name: 'Vũng Tàu',
            path: '/vung-tau',
            quantity: 328,
        },
        {
            src: 'https://cdn.luxstay.com/home/location/location_4_1559786177.png',
            name: 'Đà Lạt',
            path: '/da-lat',
            quantity: 910,
        },
        {
            src: 'https://cdn.luxstay.com/home/location/location_16_1559303173.png',
            name: 'Đà Nẵng',
            path: '/da-nang',
            quantity: 867,
        },
        {
            src: 'https://cdn.luxstay.com/home/location/location_1_1559373089.png',
            name: 'Nha Trang',
            path: '/nha-trang',
            quantity: 564,
        },
        {
            src: 'https://cdn.luxstay.com/home/location/location_5_1559786196.png',
            name: 'Quảng Ninh',
            path: '/quang-ninh',
            quantity: 141,
        },
        {
            src: 'https://cdn.luxstay.com/home/location/location_6_1559786202.png',
            name: 'Hội An',
            path: '/hoi-an',
            quantity: 305,
        },
    ];

    const [placeHead, setplaceHead] = useState(0);
    const [placeEnd, setPlaceEnd] = useState(5);

    return (
        <div className="grid wide">
            <div class="container-place">
                <div class="place__text">
                    <h4 class="place__heading">Địa điểm nổi bật</h4>
                    <p class="place__desc">Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn</p>
                </div>
                <div class="row container-place__list">
                    <button
                        className={
                            placeHead === 0
                                ? 'container-place__pre fas fa-chevron-left'
                                : 'container-place__pre fas fa-chevron-left active'
                        }
                        onClick={() => {
                            setplaceHead((pre) => (pre -= 1));
                            setPlaceEnd((pre) => (pre -= 1));
                        }}
                        disabled={placeHead <= 0 ? true : false}
                    ></button>
                    <button
                        className={
                            placeEnd === places.length
                                ? 'container-place__next fas fa-chevron-right'
                                : 'container-place__next fas fa-chevron-right active'
                        }
                        onClick={() => {
                            setPlaceEnd((pre) => (pre += 1));
                            setplaceHead((pre) => (pre += 1));
                        }}
                        disabled={placeEnd >= places.length ? true : false}
                    ></button>
                    {places.map((place, index) => {
                        return (
                            <Link
                                to={'/vi' + place.path}
                                className={
                                    index >= placeHead && index <= placeEnd - 1
                                        ? 'col l-2-4 m-4 c-6 container-place__item active'
                                        : 'col l-2-4 m-4 c-6 container-place__item'
                                }
                                key={index}
                            >
                                <div className="container-place__conten">
                                    <img src={place.src} alt="" className="container-place__img" />
                                    <div className="container-place__body">
                                        <h3 className="container-place__body--name">{place.name}</h3>
                                        <span className="container-place__body--number">{place.quantity} chỗ ở</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Place;
