import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '../FormGroup/FormGroup';

function ContainnerLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    };

    const SubmitFormHandle = (e) => {};

    return (
        <div class="moda">
            <div class="moda-overlay">
                <div class="ovelay-welcome">
                    <div class=" ovelay-welcome__body">
                        <h3 class="ovelay-welcome__title">
                            Đăng ký thành viên Luxstay - Tích điểm thưởng và nhận ưu đãi
                        </h3>
                        <p class="ovelay-welcome__desc">
                            Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay quyền lợi.
                        </p>
                    </div>
                </div>
                <div class="grid wide ovelay-conten__login">
                    <div class="row">
                        <div class="col l-4 m-5 content-item">
                            <img src="https://luxstay.com/account/coins@2x.png" alt="" class="ovelay-conten__img" />
                            <h4 class="ovelay-conten__header">Tích điểm nhanh chóng</h4>
                            <p class="ovelay-conten__desc">
                                Tích điểm đối với mỗi lượt đặt chỗ thành công. Quy đổi thành Lux Credit để du lịch nhiều
                                hơn nữa.
                            </p>
                        </div>
                        <div class="col l-4 m-5 content-item">
                            <img src="https://luxstay.com/account/top-sales@2x.png" alt="" class="ovelay-conten__img" />
                            <h4 class="ovelay-conten__header">Tiện ích thông minh</h4>
                            <p class="ovelay-conten__desc">
                                Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có kết nối mạng. Hoàn tiền nhanh
                                gọn. Đổi lịch dễ dàng.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col l-4 m-5 content-item">
                            <img src="https://luxstay.com/account/wallet@2x.png" alt="" class="ovelay-conten__img" />
                            <h4 class="ovelay-conten__header">Thanh toán đơn giản</h4>
                            <p class="ovelay-conten__desc">
                                Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức năng lưu thẻ để đặt phòng lần
                                sau.
                            </p>
                        </div>
                        <div class="col l-4 m-5 content-item">
                            <img src="https://luxstay.com/account/backpack@2x.png" alt="" class="ovelay-conten__img" />
                            <h4 class="ovelay-conten__header">Ưu đãi mỗi ngày</h4>
                            <p class="ovelay-conten__desc">
                                Nhận thông báo ưu đãi từ Luxstay khi có kế hoạch du lịch để lựa chọn và đặt ngay cho
                                mình một chỗ ở phù hợp, tiện nghi với giá tốt nhất.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="moda-body">
                <div class="auth-from col c-12">
                    <div class="auth-from__container">
                        <div class="auth-from__header">
                            <h3 class="auth-from__heading">Đăng nhập</h3>
                            <h3 class="auth-from__desc">Đăng nhập Luxstay để trải nghiệm</h3>
                        </div>
                        <form action="" method="POST" class="form" id="form-1">
                            <FormGroup
                                lable="Địa chỉ Email"
                                typeInput="email"
                                name="email"
                                placeholder="VD: nhattrinhminh@admin.vn"
                                value={email}
                                setValue={setEmail}
                                icon="fas fa-envelope"
                            />
                            <FormGroup
                                lable="Nhập mật khẩu"
                                typeInput="password"
                                name="password"
                                placeholder="#534767@fdgfs/3/"
                                value={password}
                                setValue={setPassword}
                                minLength={8}
                                icon="fas fa-lock"
                            />
                            <button type="submit" class="btn form-submit">
                                Đăng nhập
                            </button>
                        </form>
                        <h4 class="auth-form__convert">
                            Quên mật khẩu?
                            <Link to="" class="auth-form__convert--link">
                                Nhấn vào đây
                            </Link>
                        </h4>
                        <h4 class="auth-form__convert">
                            Bạn chưa có tài khoản?
                            <Link to="/registration" class="auth-form__convert--link">
                                Đăng ký
                            </Link>
                        </h4>
                        <h4 class="auth-form__provision">Hoặc</h4>
                    </div>
                    <div class="auth-from__social">
                        <Link to="" class="btn auth-from__social--link">
                            Đăng nhập với Facebook
                            <i class="auth-from__social--icon-facebook fab fa-facebook"></i>
                        </Link>
                        <Link to="" class="btn auth-from__social--link">
                            Đăng nhập với google
                            <i class="auth-from__social--icon-google fab fa-google"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContainnerLogin;
