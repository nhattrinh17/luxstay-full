import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import addRoom from '../../apiServices/addRoom';
import FormGroup from '../../Components/FormGroup/FormGroup';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../../firebaseConfig';
import styles from './addRoom.module.scss';
import { createAxios } from '../../utils/createInstance';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function AddRoom() {
    const [nameRoom, setNameRoom] = useState('');
    const [imgsRoom, setImgsRoom] = useState([]);
    const [numberBedrooms, setNumberBedrooms] = useState(0);
    const [kindOfRoom, setKindOfRoom] = useState('');
    const [idPlace, setIdPlace] = useState(1);
    const [pricePerNight, setPricePerNight] = useState(0);
    const [areaRoom, setAreaRoom] = useState(0);
    const [addressRoom, setAddressRoom] = useState('');
    const [descRoom, setDescRoom] = useState('');
    const [numberBathrooms, setnumberBathrooms] = useState(0);
    const [numberBeds, setNumberBeds] = useState(0);
    const [maximumGuests, setMaximumGuests] = useState(0);
    const [isWifi, setIsWifi] = useState(false);
    const [isHarmonic, setIsHarmonic] = useState(false);
    const [isTV, setIsTV] = useState(false);
    const [isInternet, setIsInternet] = useState(false);
    const [isWashingMachine, setIsWashingMachine] = useState(false);
    const [isBathTools, setIsBathTools] = useState(false);
    const [isRefrigerator, setIsRefrigerator] = useState(false);
    const [isElectricStove, setIsElectricStove] = useState(false);
    const [isBalcony, setIsBalcony] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.login.currentUser);
    const interceptCheckToken = createAxios(user, dispatch, loginSuccess);

    // Upload img
    async function handleUploadImg(file) {
        if (file == null) {
            console.log('Please choose a file first!');
        }
        // return new Promise((resolve, reject) => {
        // });
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log('Upload is ' + progress + '% done');
                // update progress
            },
            (err) => {
                console.log(err);
            },
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log('Url Img: ' + url);
                    setImgsRoom((pre) => [...pre, url]);
                });
            },
        );
    }

    function handleInputFile(e) {
        const imgFiles = e.target.files;
        Object.keys(imgFiles).forEach(async (index) => {
            await handleUploadImg(imgFiles[index]);
        });
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();

        const dataRequest = {
            nameRoom,
            imgsRoom: imgsRoom.join('--and--'),
            addressRoom,
            numberBedrooms,
            kindOfRoom,
            pricePerNight,
            idPlace,
            areaRoom,
            descRoom,
            numberBathrooms,
            numberBeds,
            maximumGuests,
            isWifi: isWifi ? 1 : 0,
            isHarmonic: isHarmonic ? 1 : 0,
            isTV: isTV ? 1 : 0,
            isInternet: isInternet ? 1 : 0,
            isWashingMachine: isWashingMachine ? 1 : 0,
            isBathTools: isBathTools ? 1 : 0,
            isRefrigerator: isRefrigerator ? 1 : 0,
            isElectricStove: isElectricStove ? 1 : 0,
            isBalcony: isBalcony ? 1 : 0,
        };

        console.log(dataRequest);

        const res = await addRoom(navigate, dataRequest, user.accessToken, interceptCheckToken);
        console.log(res);
    };

    useEffect(() => {
        if (!user?.accessToken) {
            navigate('/vi');
        }
        // eslint-disable-next-line
    }, [navigate]);

    return (
        <div className={cx('warrape')}>
            <form method="POST">
                <FormGroup
                    heading="Nhập tên phòng"
                    typeInput="text"
                    name="nameRoom"
                    placeholder="Hãy nhập tên phòng"
                    value={nameRoom}
                    setValue={setNameRoom}
                />
                <div className={cx('form-group')}>
                    <h3 className={cx('auth-form__group--lable')}>Những ảnh phòng của bạn</h3>
                    <input
                        type="file"
                        name="imgsRoom"
                        className={cx('form-control')}
                        rules="repuired"
                        multiple
                        // ref={fileInput}
                        onChange={handleInputFile}
                    />
                </div>
                <FormGroup
                    heading="Nhập số phòng ngủ phòng của bạn"
                    typeInput="number"
                    name="numberBedrooms"
                    value={numberBedrooms}
                    setValue={setNumberBedrooms}
                />
                <FormGroup
                    heading="Nhập loại phòng của bạn"
                    typeInput="text"
                    name="kindOfRoom"
                    placeholder="Hãy nhập loại phòng"
                    value={kindOfRoom}
                    setValue={setKindOfRoom}
                />
                <FormGroup
                    heading="Nhập giá phòng trong 1 đêm"
                    typeInput="text"
                    name="pricePerNight"
                    placeholder="Hãy nhập tên phòng"
                    value={pricePerNight}
                    setValue={setPricePerNight}
                />
                <label htmlFor="place" style={{ margin: 4, fontSize: `1.4rem` }}>
                    Choose a place:
                </label>

                <select id="place" onChange={(e) => setIdPlace(e.target.value)}>
                    <option value="1">Hà Nội</option>
                    <option value="2">Tp HCM</option>
                    <option value="3">Vũng Tàu</option>
                    <option value="4">Đà Lạt</option>
                    <option value="5">Đà Nẵng</option>
                    <option value="6">Nha Trang</option>
                    <option value="7">Quảng Ninh</option>
                    <option value="8">Hội An</option>
                </select>
                <FormGroup
                    heading="Nhập diện tích phòng"
                    typeInput="text"
                    name="areaRoom"
                    placeholder="Hãy nhập diện tích phòng"
                    value={areaRoom}
                    setValue={setAreaRoom}
                />
                <FormGroup
                    heading="Nhập địa chỉ phòng"
                    typeInput="text"
                    name="addressRoom"
                    placeholder="Hãy nhập địa chỉ phòng"
                    value={addressRoom}
                    setValue={setAddressRoom}
                />
                <FormGroup
                    heading="Nhập thông tin chi tiết của phòng"
                    typeInput="textarea"
                    name="descRoom"
                    placeholder="Hãy nhập thông tin chi tiết"
                    value={descRoom}
                    setValue={setDescRoom}
                />
                <FormGroup
                    heading="Nhập số phòng tắm phòng"
                    typeInput="number"
                    name="numberBathrooms"
                    value={numberBathrooms}
                    setValue={setnumberBathrooms}
                />
                <FormGroup
                    heading="Nhập số giường ngủ phòng"
                    typeInput="text"
                    name="numberBeds"
                    placeholder="Hãy nhập tên phòng"
                    value={numberBeds}
                    setValue={setNumberBeds}
                />
                <FormGroup
                    heading="Nhập số khách tối đa của 1 phòng"
                    typeInput="bumber"
                    name="maximumGuests"
                    value={maximumGuests}
                    setValue={setMaximumGuests}
                />
                <h3>Tiện ích của phòng</h3>
                <FormGroup
                    heading="Wifi"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isWifi"
                    value={isWifi}
                    setValue={setIsWifi}
                />
                <FormGroup
                    heading="TV"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isTV"
                    value={isTV}
                    setValue={setIsTV}
                />
                <FormGroup
                    heading="Điều Hòa"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isHarmonic"
                    value={isHarmonic}
                    setValue={setIsHarmonic}
                />
                <FormGroup
                    heading="Internet"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isInternet"
                    value={isInternet}
                    setValue={setIsInternet}
                />
                <FormGroup
                    heading="Máy giặt"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isWashingMachine"
                    value={isWashingMachine}
                    setValue={setIsWashingMachine}
                />
                <FormGroup
                    heading="Đồ dùng phòng tắm"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isBathTools"
                    value={isBathTools}
                    setValue={setIsBathTools}
                />
                <FormGroup
                    heading="Tủ Lạnh"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isRefrigerator"
                    value={isRefrigerator}
                    setValue={setIsRefrigerator}
                />
                <FormGroup
                    heading="Bếp điện"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isElectricStove"
                    value={isElectricStove}
                    setValue={setIsElectricStove}
                />
                <FormGroup
                    heading="Ban công"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isBalcony"
                    value={isBalcony}
                    setValue={setIsBalcony}
                />

                <button className={cx('btn-submit')} onClick={handlerSubmit}>
                    Thêm Phòng
                </button>
            </form>
        </div>
    );
}

export default AddRoom;
