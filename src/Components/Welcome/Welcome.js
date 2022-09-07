import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './welcome.module.scss';

const cx = classNames.bind(styles);

function Welcome() {
    return (
        <div className="grid wide">
            <div className={cx('container-welcome')}>
                <h1 className={cx('container-welcome__heading')}>Chào mừng đến với Luxstay!</h1>
                <p className={cx('container-welcome__desc')}>
                    Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên Luxstay
                </p>
                <p className={cx('container-welcome__desc-link')}>
                    <Link to="/vi/login" className={cx('container-welcome__link')}>
                        Đăng nhập
                    </Link>
                    {' hoặc '}
                    <Link to="/vi/registration" className={cx('container-welcome__link')}>
                        Đăng ký
                    </Link>
                    {' để trải nghiệm !'}
                </p>
            </div>
            <div className={cx('container-buy', 'row')}>
                <div className="col l-2 m-4 c-6">
                    <Link to="homestay" className={cx('container-homestay')}>
                        <img
                            src="https://cdn.luxstay.com/home/suggestion/location_6_1572858402.png"
                            alt="Homestay"
                            className={cx('container-homestay__img')}
                        />
                        <div className={cx('container-homestay__body')}>
                            <h4 className={cx('container-homestay__body--heading')}>Homestay</h4>
                            <p className={cx('container-homestay__body--desc')}>Căn hộ dịch vụ & Biệt thự</p>
                        </div>
                    </Link>
                </div>
                <div className="col l-2 m-4 c-6">
                    <Link to="klook" className={cx('container-homestay')}>
                        <img
                            src="https://cdn.luxstay.com/home/klook/entire-houses.jpg"
                            alt="Homestay"
                            className={cx('container-homestay__img')}
                        />
                        <div className={cx('container-homestay__body')}>
                            <h4 className={cx('container-homestay__body--heading')}>Vé tham quan</h4>
                            <p className={cx('container-homestay__body--desc')}>Mua vé thật dễ dàng</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
