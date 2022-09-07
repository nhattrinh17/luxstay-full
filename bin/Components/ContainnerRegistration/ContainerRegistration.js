import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '../FormGroup/FormGroup';

function ContainnerRegistration() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                            <h3 class="auth-from__heading">Đăng ký thành viên</h3>
                        </div>
                        <form action="" method="POST" class="form" id="form-1">
                            <FormGroup
                                lable="Địa chỉ Email"
                                type="email"
                                name="email"
                                placeholder="VD: nhattrinhminh@admin.vn"
                                value={email}
                                setValue={setEmail}
                                icon="fas fa-envelope"
                            />
                            <FormGroup
                                lable="Số điện thoại"
                                type="number"
                                name="phoneNumber"
                                value={phoneNumber}
                                setValue={setPhoneNumber}
                            />
                            <FormGroup
                                lable="Tên"
                                type="text"
                                name="firstName"
                                value={firstName}
                                setValue={setFirstName}
                            />
                            <FormGroup
                                lable="Họ và tên đệm"
                                type="text"
                                name="lastName"
                                value={lastName}
                                setValue={setLastName}
                            />
                            <FormGroup
                                lable="Nhập mật khẩu(Tối thiểu 8 ký tự)"
                                type="password"
                                name="password"
                                placeholder="#534767@fdgfs/3/"
                                value={password}
                                setValue={setPassword}
                                minLength={8}
                                icon="fas fa-lock"
                            />
                            <button type="submit" class="btn form-submit">
                                Đăng ký
                            </button>
                        </form>
                        <h4 class="auth-form__convert">
                            Quên mật khẩu?
                            <Link to="" class="auth-form__convert--link">
                                Nhấn vào đây
                            </Link>
                        </h4>
                        <h4 class="auth-form__convert">
                            Bạn đã có tài khoản?
                            <Link to="/vi/login" class="auth-form__convert--link">
                                Đăng Nhập
                            </Link>
                        </h4>
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

export default ContainnerRegistration;
