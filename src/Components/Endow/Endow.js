import { Link } from 'react-router-dom';

import './endow.css';

function Endow() {
    const endowList = [
        {
            id: '44203',
            img: 'https://cdn.luxstay.com/home/event/event_1_1633051905.jpg',
        },
        {
            id: '44191',
            img: 'https://cdn.luxstay.com/home/event/event_1_1614658965.jpg',
        },
        {
            id: '44087',
            img: 'https://cdn.luxstay.com/home/event/event_1_1596604498.jpg',
        },
    ];

    return (
        <div className="grid wide">
            <div className="container-endow__header row">
                <div className="container-endow__text">
                    <h2 className="container-endow__heading">Ưu đãi độc quyền</h2>
                    <p className="container-endow__desc">Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!</p>
                </div>
                <Link to="/vi/endown" className="container-endow__more">
                    Xem Thêm
                </Link>
            </div>
            <div className="row container-endow__list">
                {endowList.map((endowItem, index) => {
                    return (
                        <div className="col l-4 m-6 c-12" key={index}>
                            <Link to={'/vi/endown/' + endowItem.id} className="container-endow__item">
                                <img src={endowItem.img} alt="" className="container-endow__img" />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Endow;
