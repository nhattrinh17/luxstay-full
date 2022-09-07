import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomItem from '../../../RoomItem/RoomItem';

import styles from './search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const navigator = useNavigate();
    const startSearch = useRef();
    const [textSearch, setTextSearch] = useState('');
    const [day, setDay] = useState('');
    const [amountAdult, setAmountAdult] = useState(0);
    const [amountChildren, setAmountChildren] = useState(0);
    const [amountInfant, setAmountInfant] = useState(0);
    const [totalGuests, setTotalGuests] = useState(0);
    const [searchResult, setSearchResult] = useState([]);

    const data = [
        {
            id_room: 1,
            img: 'https://cdn.luxstay.com/rooms/35280/large/Pool.png',
            name_room: 'Muong Thanh Hotel',
            address_room: 'Linh Đàm, Hà Nội',
        },
    ];

    const handleSearch = () => {
        const name_room = textSearch;
        const guests = totalGuests;
        navigator('/vi/homestay', {
            state: {
                name_room,
                guests,
            },
        });
    };
    useEffect(() => {
        setTimeout(() => {
            setSearchResult(data);
        }, 2000);
    }, []);

    return (
        <div className={cx('header-search')}>
            <i className={cx('header-search-icon', ' fas fa-search')}></i>

            <div className={cx('header-search__input--wap')}>
                <HeadlessTippy
                    onClickOutside={() => setSearchResult([])}
                    interactive
                    delay={[0, 700]}
                    visible={searchResult.length > 0}
                    offset={[128, 8]}
                    render={(attrs) => (
                        <div className={cx('header-search--history')} tabIndex="-1" {...attrs}>
                            <span className={cx('header-search--history__heading')}>
                                Những kết quả tìm kiếm hàng đầu
                            </span>
                            {searchResult.map((searchItem, index) => {
                                return <RoomItem data={searchItem} key={index}></RoomItem>;
                            })}
                        </div>
                    )}
                >
                    <input
                        type="text"
                        className={cx('header-search__input')}
                        value={textSearch}
                        onChange={(e) => setTextSearch(e.target.value)}
                        placeholder="Tìm Kiếm"
                        required
                    />
                </HeadlessTippy>
            </div>
            {/* Using a wrapper <div> tag around 
            the reference element solves this by creating a new parentNode context.  */}
            <div>
                <HeadlessTippy
                    interactive
                    offset={[12, 8]}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className={cx('header-search__day--box')} {...attrs}>
                            <input
                                type="date"
                                className={cx('header-search__day--input')}
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                            />
                        </div>
                    )}
                >
                    <div className={cx('header-search__day')}>
                        <i className={cx('header-search__day--icon', 'fas fa-calendar-alt')}></i>
                        <p className={cx('header-search__day--text')}>{day ? day : 'Ngày'}</p>
                    </div>
                </HeadlessTippy>
            </div>
            <div>
                <HeadlessTippy
                    interactive
                    offset={[120, 8]}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className={cx('header-search__amount-people')} {...attrs}>
                            <ul className={cx('amount-people__list')}>
                                <li className={cx('amount-people__item')}>
                                    <div className={cx('amount-people__item--lever')}>
                                        <p className={cx('amount-people__item--lever--text')}>Người Lớn</p>
                                        <p className={cx('amount-people__item--lever--des')}>
                                            Trên 12 tuổi(hoặc trên 1m2)
                                        </p>
                                    </div>

                                    <div className={cx('amount-people__item--wap')}>
                                        <i
                                            className={cx('amount-people__item--icon-minus', 'fas fa-minus')}
                                            onClick={() => {
                                                if (amountAdult >= 1) {
                                                    setAmountAdult((pre) => pre - 1);
                                                    setTotalGuests((pre) => pre - 1);
                                                }
                                            }}
                                        ></i>
                                        <input
                                            type="number"
                                            className={cx('amount-people__item--amount')}
                                            value={amountAdult}
                                            readOnly
                                            min="0"
                                        />
                                        <i
                                            className={cx('amount-people__item--icon-plus', 'fas fa-plus')}
                                            onClick={() => {
                                                setAmountAdult((pre) => pre + 1);
                                                setTotalGuests((pre) => pre + 1);
                                            }}
                                        ></i>
                                    </div>
                                </li>
                                <li className={cx('amount-people__item')}>
                                    <div className={cx('amount-people__item--lever')}>
                                        <p className={cx('amount-people__item--lever--text')}>Trẻ em</p>
                                        <p className={cx('amount-people__item--lever--des')}>2 - 12 tuổi</p>
                                    </div>

                                    <div className={cx('amount-people__item--wap')}>
                                        <i
                                            className={cx('amount-people__item--icon-minus', 'fas fa-minus')}
                                            onClick={() => {
                                                if (amountChildren >= 1) {
                                                    setAmountChildren((pre) => pre - 1);
                                                    setTotalGuests((pre) => pre - 1);
                                                }
                                            }}
                                        ></i>
                                        <input
                                            type="number"
                                            className={cx('amount-people__item--amount')}
                                            value={amountChildren}
                                            readOnly
                                            min="0"
                                        />
                                        <i
                                            className={cx('amount-people__item--icon-plus', 'fas fa-plus')}
                                            onClick={() => {
                                                setAmountChildren((pre) => pre + 1);
                                                setTotalGuests((pre) => pre + 1);
                                            }}
                                        ></i>
                                    </div>
                                </li>
                                <li className={cx('amount-people__item')}>
                                    <div className={cx('amount-people__item--lever')}>
                                        <p className={cx('amount-people__item--lever--text')}>Trẻ sơ sinh</p>
                                        <p className={cx('amount-people__item--lever--des')}>Dưới 2 tuổi</p>
                                    </div>

                                    <div className={cx('amount-people__item--wap')}>
                                        <i
                                            className={cx('amount-people__item--icon-minus', 'fas fa-minus')}
                                            onClick={() => {
                                                if (amountInfant >= 1) {
                                                    setAmountInfant((pre) => pre - 1);
                                                    setTotalGuests((pre) => pre - 1);
                                                }
                                            }}
                                        ></i>
                                        <input
                                            type="number"
                                            className={cx('amount-people__item--amount')}
                                            value={amountInfant}
                                            readOnly
                                            min="0"
                                        />
                                        <i
                                            className={cx('amount-people__item--icon-plus', 'fas fa-plus')}
                                            onClick={() => {
                                                setAmountInfant((pre) => pre + 1);
                                                setTotalGuests((pre) => pre + 1);
                                            }}
                                        ></i>
                                    </div>
                                </li>
                            </ul>
                            <div className={cx('amount-people__confirm')}>
                                <p
                                    href=""
                                    className={cx('amount-people__confirm-delete')}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setAmountAdult(0);
                                        setAmountChildren(0);
                                        setAmountInfant(0);
                                        setTotalGuests(0);
                                    }}
                                >
                                    Xóa
                                </p>
                                <h3 className={cx('amount-people__confirm-apply')}>Áp dụng</h3>
                            </div>
                        </div>
                    )}
                >
                    <div className={cx('header-search__amount')}>
                        <i className={cx('header-search__amount--icon', 'fas fa-user')}></i>
                        <h2 className={cx('header-search__amount--text')}>
                            {totalGuests ? totalGuests + ' khách' : 'Số khách'}
                        </h2>
                    </div>
                </HeadlessTippy>
            </div>
            <div className={cx('header-search__start')} ref={startSearch} onClick={handleSearch}>
                <i className={cx('header-search__start--icon', 'fas fa-search')}></i>
            </div>
        </div>
    );
}

export default Search;
