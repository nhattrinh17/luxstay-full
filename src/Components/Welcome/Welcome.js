import { Link } from 'react-router-dom';
import './welcome.css';

function Welcome() {
    return (
        <div className="grid wide">
            <div class="container-welcome">
                <h1 class="container-welcome__heading">Chào mừng đến với Luxstay!</h1>
                <p class="container-welcome__desc">
                    Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên Luxstay
                </p>
                <p class="container-welcome__desc-link">
                    <Link to="/vi/login" class="container-welcome__link">
                        Đăng nhập
                    </Link>
                    {' hoặc '}
                    <Link to="/vi/registration" class="container-welcome__link">
                        Đăng ký
                    </Link>
                    {' để trải nghiệm !'}
                </p>
            </div>
            <div class="row  container-buy">
                <div class="col l-2 m-4 c-6">
                    <Link to="homestay" class="container-homestay">
                        <img
                            src="https://cdn.luxstay.com/home/suggestion/location_6_1572858402.png"
                            alt="Homestay"
                            class="container-homestay__img"
                        />
                        <div class="container-homestay__body">
                            <h4 class="container-homestay__body--heading">Homestay</h4>
                            <p class="container-homestay__body--desc">Căn hộ dịch vụ & Biệt thự</p>
                        </div>
                    </Link>
                </div>
                <div class="col l-2 m-4 c-6">
                    <Link to="klook" class="container-homestay">
                        <img
                            src="https://cdn.luxstay.com/home/klook/entire-houses.jpg"
                            alt="Homestay"
                            class="container-homestay__img"
                        />
                        <div class="container-homestay__body">
                            <h4 class="container-homestay__body--heading">Vé tham quan</h4>
                            <p class="container-homestay__body--desc">Mua vé thật dễ dàng</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
