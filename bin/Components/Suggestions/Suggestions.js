import { useState } from 'react';
import { Link } from 'react-router-dom';

import './suggestions.css';

function Suggestions() {
    const [suggestionHead, setSuggestionHead] = useState(0);
    const [suggestionEnd, setSuggestionEnd] = useState(3);

    const suggestionsList = [
        {
            name: 'Vũng Tàu Biệt thự hồ bơi',
            desc: 'Những căn biệt thự có hồ bơi dành cho kỳ nghỉ của bạn tại Vũng Tàu',
            img: 'https://cdn.luxstay.com/home/apartment/apartment_2_1614588617.jpg',
            id: '1711',
        },
        {
            name: 'Vi vu ngoại thành Hà Nội',
            desc: 'Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà Nội',
            img: '	https://cdn.luxstay.com/home/apartment/apartment_1_1625465608.jpg',
            id: '1712',
        },
        {
            name: 'Hà Nội thành phố lãng mạng',
            desc: 'Không gian lãng mạn dành cho cặp đôi tại trung tâm Hà Nội',
            img: 'https://cdn.luxstay.com/home/apartment/apartment_1_1614660728.jpg',
            id: '1713',
        },
        {
            name: 'Sài gòn cần là có ngay',
            desc: 'Những căn homestay có 01 phòng ngủ tại Sài Gòn có thể đặt nhanh chóng',
            img: 'https://cdn.luxstay.com/home/apartment/apartment_2_1615794965.jpg',
            id: '1714',
        },
        {
            name: 'Bể bơi & BBQ',
            desc: 'Trải nghiệm đẳng cấp tại những căn homestay có bể bơi đẹp và khu vực BBQ ấm cúng',
            img: 'https://cdn.luxstay.com/home/apartment/apartment_1_1584606781.jpg',
            id: '1715',
        },
        {
            name: 'Siêu giảm giá',
            desc: 'Top chỗ ở giảm giá đến 50% từ các chủ nhà thân thiện trên Luxstay',
            img: 'https://cdn.luxstay.com/home/apartment/apartment_2_1584606872.jpg',
            id: '1716',
        },
        {
            name: 'Gần trung tâm',
            desc: 'Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh',
            img: 'https://cdn.luxstay.com/home/apartment/apartment_10_1584602562.jpg',
            id: '1717',
        },
    ];

    return (
        <div className="grid wide">
            <div className="container-suggestions">
                <div className="suggestions-text">
                    <h3 className="about__header">Gợi ý từ Luxstay</h3>
                    <p className="about__desc">Những địa điểm thường đến mà Luxstay gợi ý dành cho bạn</p>
                </div>
                <div className="row container-suggestions__list">
                    <button
                        className={
                            suggestionHead === 0
                                ? 'container-suggestions__pre fas fa-chevron-left'
                                : 'container-suggestions__pre fas fa-chevron-left active'
                        }
                        onClick={() => {
                            setSuggestionHead((pre) => (pre -= 1));
                            setSuggestionEnd((pre) => (pre -= 1));
                        }}
                        disabled={suggestionHead <= 0 ? true : false}
                    ></button>
                    <button
                        className={
                            suggestionEnd === suggestionsList.length
                                ? 'container-suggestions__next fas fa-chevron-right'
                                : 'container-suggestions__next fas fa-chevron-right active'
                        }
                        onClick={() => {
                            setSuggestionEnd((pre) => (pre += 1));
                            setSuggestionHead((pre) => (pre += 1));
                        }}
                        disabled={suggestionEnd >= suggestionsList.length - 1 ? true : false}
                    ></button>
                    {suggestionsList.map((suggestionsItem, index) => {
                        return (
                            <Link
                                to={'/vi/suggestion/' + suggestionsItem.id}
                                key={index}
                                className={
                                    index >= suggestionHead && index <= suggestionEnd
                                        ? 'col l-3 m-6 c-12 container-suggestions__item active'
                                        : 'col l-3 m-6 c-12 container-suggestions__item'
                                }
                            >
                                <img src={suggestionsItem.img} alt="" className="suggestions__img" />
                                <div className="suggestions__body">
                                    <h4 className="suggestions__body--header">{suggestionsItem.name}</h4>
                                    <p className="suggestions__body--desc">{suggestionsItem.desc}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Suggestions;
