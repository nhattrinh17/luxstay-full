import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './place.module.scss';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Place() {
    const allPlaceAndTotalRoom = useSelector((state) => state.place.getAllPlace.currentAllPlace);

    const [placeHead, setplaceHead] = useState(0);
    const [placeEnd, setPlaceEnd] = useState(5);

    return (
        <div className="grid wide">
            <div className={cx('container-place')}>
                <div className={cx('place__text')}>
                    <h4 className={cx('place__heading')}>Địa điểm nổi bật</h4>
                    <p className={cx('place__desc')}>
                        Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn
                    </p>
                </div>
                <div className={cx('container-place__list', 'row')}>
                    <button
                        className={
                            placeHead === 0
                                ? cx('container-place__pre', 'fas fa-chevron-left')
                                : cx('container-place__pre', 'fas fa-chevron-left', 'active')
                        }
                        onClick={() => {
                            setplaceHead((pre) => (pre -= 1));
                            setPlaceEnd((pre) => (pre -= 1));
                        }}
                        disabled={placeHead <= 0 ? true : false}
                    ></button>
                    <button
                        className={
                            placeEnd === allPlaceAndTotalRoom?.length
                                ? cx('container-place__next', 'fas fa-chevron-right')
                                : cx('container-place__next', 'fas fa-chevron-right', 'active')
                        }
                        onClick={() => {
                            setPlaceEnd((pre) => (pre += 1));
                            setplaceHead((pre) => (pre += 1));
                        }}
                        disabled={placeEnd >= allPlaceAndTotalRoom?.length ? true : false}
                    ></button>
                    {allPlaceAndTotalRoom?.map((place, index) => {
                        return (
                            <Link
                                to={{
                                    pathname: '/vi/' + place.slug_place,
                                }}
                                className={
                                    index >= placeHead && index <= placeEnd - 1
                                        ? cx('container-place__item active', 'col l-2-4 m-4 c-6')
                                        : cx('container-place__item', 'col l-2-4 m-4 c-6')
                                }
                                key={index}
                            >
                                <div className={cx('container-place__conten')}>
                                    <img
                                        src={place.img_place}
                                        alt={place.name_place}
                                        className={cx('container-place__img')}
                                    />
                                    <div className={cx('container-place__body')}>
                                        <h3 className={cx('container-place__body--name')}>{place.name_place}</h3>
                                        <span className={cx('container-place__body--number')}>
                                            {place.quantity} chỗ ở
                                        </span>
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
