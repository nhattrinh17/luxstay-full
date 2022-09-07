import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import getRoomByPlace from '../../apiServices/getRoomByPlace';
import styles from './roomByAddress.module.scss';

const cx = classNames.bind(styles);

function RoomsByAddress() {
    const location = useLocation();
    const [page, setPage] = useState(1);
    const [sortType, setSortType] = useState(null);
    const [rooms, setRooms] = useState([]);

    const place = location.pathname.slice(4);
    useEffect(() => {
        async function fetchData() {
            const result = await getRoomByPlace(place, page, sortType);
            setRooms(result);
        }
        fetchData();
    }, [page, sortType]);
    console.log(rooms);

    return (
        <div className={cx('grid wide')}>
            <div className={cx('filter__list')}>
                <button className={cx('filter__item')}>Hủy phòng linh hoạt</button>
                <button className={cx('filter__item')}>Đặt phòng nhanh</button>
                <button className={cx('filter__item')}>Giá ưu đãi</button>
                <button className={cx('filter__item')}>Loại phòng</button>
                <button className={cx('filter__item')}>Giá chỗ ở</button>
                <button className={cx('filter__item')}>Thêm bộ lọc</button>
            </div>
            <div className={cx('note')}>
                <span className={cx('note__before')}>
                    Trước khi đặt phòng, hãy kiểm tra những địa điểm bị hạn chế du lịch trong thời gian này
                </span>
                <span className={cx('note__after')}>
                    . Sức khỏe và sự an toàn của cộng đồng luôn được đặt hàng đầu. Vì vậy, vui lòng làm theo chỉ thị của
                    chính phủ bởi điều đó thực sự cần thiết.
                </span>
            </div>
        </div>
    );
}

export default RoomsByAddress;
