import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';

import styles from './roomItem.module.scss';

const cx = classNames.bind(styles);

function RoomItem({ data }) {
    return (
        <Link to={`/homestay/${data.id_room}`} className={cx('header-search__boby')}>
            <Image src={data.img} alt={data.name_room} className={cx('header-search__boby--img')}></Image>
            <div className={cx('header-search__boby--info')}>
                <span className={cx('header-search__boby--info-name')}>{data.name_room}</span>
                <span className={cx('header-search__boby--info-desc')}>{data.address_room}</span>
            </div>
        </Link>
    );
}

export default RoomItem;
