import { Link } from 'react-router-dom';

import './footer.css';

function Footer() {
    return (
        <div class="grid wide">
            <div class="footer">
                <div class="footer-top">
                    <div class="row">
                        <div class="col l-2-4">
                            <div class="widget__text">
                                <div class="about-item">
                                    <div class="about-item__conten">
                                        <p class="about-item__conten--text">Facebook</p>
                                        <a href="http://facebook.com/ahihi1702" class="about-item__conten--link">
                                            http://facebook.com/ahihi1702
                                        </a>
                                    </div>
                                </div>
                                <div class="about-item">
                                    <div class="about-item__conten">
                                        <p class="about-item__conten--text">Call center</p>
                                        <div class="about-item__conten--call">
                                            <a href="tel:0334543310" class="about-item__conten--call-link">
                                                0334543310
                                            </a>
                                            <a href="tel:0334543310" class="about-item__conten--call-link">
                                                0334543310
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col l-2-4 c-0">
                            <h3 class="widget__title">Top Homestay được yêu thích</h3>
                            <ul class="widget__menu-list">
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Homestay Đà Lạt
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Homestay Hà Nội
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Homestay Hồ Chí Minh
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Homestay Sapa
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Homestay Vũng Tàu
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Homestay Tam Đảo
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Homestay Hội An
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Homestay Đà Nẵng
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Homestay Hạ Long
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Homestay Phan Thiết
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col l-2-4 c-0">
                            <h3 class="widget__title">Không gian ưa thích</h3>
                            <ul class="widget__menu-list">
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Biệt thự
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Căn hộ dịch vụ
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Nhà riêng
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Studio
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col l-2-4 c-0">
                            <h3 class="widget__title">Về chúng tôi</h3>
                            <ul class="widget__menu-list">
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Blog
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Điều khoản hoạt động
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <a href="tel:03345433310" class="widget__menu-item--link">
                                        03345433310
                                    </a>
                                </li>
                                <li class="widget__menu-item">
                                    <a href="tel:03345433310" class="widget__menu-item--link">
                                        03345433310
                                    </a>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        info@luxstay.com
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Trang thông tin dành cho chủ nhà
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Tạp chí du lịch
                                    </Link>
                                </li>
                                <li class="widget__menu-item">
                                    <Link to="" class="widget__menu-item--link">
                                        Cơ hội nghề nghiệp
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col l-2-4 c-0">
                            <h3 class="widget__title">Tải ứng dụng Luxstay</h3>
                            <div class="dowload-luxstay">
                                <div class="col l-6">
                                    <img src="https://luxstay.com/qr-code.png" alt="" class="dowload-luxstay__qr" />
                                </div>
                                <div class="dowload-luxstay__app col l-6">
                                    <img
                                        src="https://luxstay.com/icons/apple-store.svg"
                                        alt=""
                                        class="dowload-luxstay__app--img"
                                    />
                                    <img
                                        src="https://luxstay.com/icons/huawei.svg"
                                        alt=""
                                        class="dowload-luxstay__app--img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="footer-bottom__text">
                    © 2022 Luxstay. Bản quyền thuộc về Trịnh Minh Nhật - MSDN: 0108308449. Mọi hành vi sao chép đều là
                    phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi.
                </p>
                <p class="footer-bottom__text">
                    660 Kim Giang, xã Thanh Liệt, huyện Thanh Trì, Hà Nội. Email: trinhminhnhatxt123@gmail.com, Số điện
                    thoại: 0334543310.
                </p>
                <p class="footer-bottom__text">
                    Số Giấy chứng nhận đăng ký doanh nghiệp: 0108308449, ngày cấp: 06/06/2018, nơi cấp: Sở Kế hoạch và
                    Đầu tư TP Hà Nội
                </p>
            </div>
        </div>
    );
}

export default Footer;
