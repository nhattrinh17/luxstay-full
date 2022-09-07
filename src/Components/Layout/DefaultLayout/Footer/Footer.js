import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className="grid wide">
            <div className={cx('footer')}>
                <div className={cx('footer-top')}>
                    <div className="row">
                        <div className="col l-2-4">
                            <div className={cx('widget__text')}>
                                <div className={cx('about-item')}>
                                    <div className={cx('about-item__conten')}>
                                        <p className={cx('about-item__conten--text')}>Facebook</p>
                                        <a
                                            href="http://facebook.com/ahihi1702"
                                            className={cx('about-item__conten--link')}
                                        >
                                            http://facebook.com/ahihi1702
                                        </a>
                                    </div>
                                </div>
                                <div className={cx('about-item')}>
                                    <div className={cx('about-item__conten')}>
                                        <p className={cx('about-item__conten--text')}>Call center</p>
                                        <div className={cx('about-item__conten--call')}>
                                            <a href="tel:0334543310" className={cx('about-item__conten--call-link')}>
                                                0334543310
                                            </a>
                                            <a href="tel:0334543310" className={cx('about-item__conten--call-link')}>
                                                0334543310
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-2-4 c-0">
                            <h3 className={cx('widget__title')}>Top Homestay được yêu thích</h3>
                            <ul className={cx('widget__menu-list')}>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Homestay Đà Lạt
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Homestay Hà Nội
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Homestay Hồ Chí Minh
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Homestay Sapa
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Homestay Vũng Tàu
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Homestay Tam Đảo
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Homestay Hội An
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Homestay Đà Nẵng
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Homestay Hạ Long
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Homestay Phan Thiết
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-2-4 c-0">
                            <h3 className="widget__title">Không gian ưa thích</h3>
                            <ul className={cx('widget__menu-list')}>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Biệt thự
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Căn hộ dịch vụ
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Nhà riêng
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Studio
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-2-4 c-0">
                            <h3 className="widget__title">Về chúng tôi</h3>
                            <ul className={cx('widget__menu-list')}>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Blog
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Điều khoản hoạt động
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <a href="tel:03345433310" className={cx('widget__menu-item--link')}>
                                        03345433310
                                    </a>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <a href="tel:03345433310" className={cx('widget__menu-item--link')}>
                                        03345433310
                                    </a>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        info@luxstay.com
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Trang thông tin dành cho chủ nhà
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Tạp chí du lịch
                                    </Link>
                                </li>
                                <li className={cx('widget__menu-item')}>
                                    <Link to="" className={cx('widget__menu-item--link')}>
                                        Cơ hội nghề nghiệp
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-2-4 c-0">
                            <h3 className={cx('widget__title')}>Tải ứng dụng Luxstay</h3>
                            <div className={cx('dowload-luxstay')}>
                                <div className="col l-6">
                                    <img
                                        src="https://luxstay.com/qr-code.png"
                                        alt=""
                                        className={cx('dowload-luxstay__qr')}
                                    />
                                </div>
                                <div className={cx('dowload-luxstay__app', 'col l-6')}>
                                    <img
                                        src="https://luxstay.com/icons/apple-store.svg"
                                        alt=""
                                        className={cx('dowload-luxstay__app--img')}
                                    />
                                    <img
                                        src="https://luxstay.com/icons/huawei.svg"
                                        alt=""
                                        className={cx('dowload-luxstay__app--img')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <p className={cx('footer-bottom__text')}>
                    © 2022 Luxstay. Bản quyền thuộc về Trịnh Minh Nhật - MSDN: 0108308449. Mọi hành vi sao chép đều là
                    phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi.
                </p>
                <p className={cx('footer-bottom__text')}>
                    660 Kim Giang, xã Thanh Liệt, huyện Thanh Trì, Hà Nội. Email: trinhminhnhatxt123@gmail.com, Số điện
                    thoại: 0334543310.
                </p>
                <p className={cx('footer-bottom__text')}>
                    Số Giấy chứng nhận đăng ký doanh nghiệp: 0108308449, ngày cấp: 06/06/2018, nơi cấp: Sở Kế hoạch và
                    Đầu tư TP Hà Nội
                </p>
            </div>
        </div>
    );
}

export default Footer;
