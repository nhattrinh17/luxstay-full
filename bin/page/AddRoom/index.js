import classNames from 'classnames/bind';
import { useState } from 'react';
import addRoom from '../../apiServices/addRoom';
import FormGroup from '../../Components/FormGroup/FormGroup';

import styles from './addRoom.module.scss';

const cx = classNames.bind(styles);
const accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNNZW1iZXIiOjEsImlzSG9zdCI6MCwiaXNBZG1pbiI6MSwiaWF0IjoxNjU0NzYzNDYyLCJleHAiOjE2NTQ4NDk4NjJ9.zwp1pOx3Ook_Gq7_OflSN-ETQAoz1HM4P8S14th-5i4';
function AddRoom() {
    // const inputFile = useRef();
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
            isWifi,
            isHarmonic,
            isTV,
            isInternet,
            isWashingMachine,
            isBathTools,
            isRefrigerator,
            isElectricStove,
            isBalcony,
        };

        // const formData = new FormData();
        // Object.keys(dataRequest).forEach((key) => {
        //     formData.append(key, dataRequest[key]);
        // });

        console.log(dataRequest);
        // console.log(formData);

        const res = await addRoom('/room/add', dataRequest, accessToken);
        console.log(res);
    };

    const encodeImageFileAsURL = (file) => {
        const reader = new FileReader();
        reader.onloadend = function () {
            setImgsRoom((pre) => [...pre, reader.result]);
        };
        reader.readAsDataURL(file);
    };

    const handleInputFile = (e) => {
        const imgs = e.target.files;

        Object.keys(imgs).forEach(async (index) => {
            await encodeImageFileAsURL(imgs[index]);
        });
    };

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
                <label htmlFor="place">Choose a car:</label>

                <select id="place" onChange={(e) => setIdPlace(e.target.value)}>
                    <option value="1">Hà Nội</option>
                    <option value="2">Tp HCM</option>
                    <option value="3">Vũng Tàu</option>
                    <option value="4">Đà Lạt</option>
                    <option value="5">Đà Nẵng</option>
                    <option value="6">Nha Trang</option>
                    <option value="7">Quảng Bình</option>
                    <option value="8">Quảng Ninh</option>
                    <option value="9">Tam Đảo</option>
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
                <FormGroup
                    heading="isWifi"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isWifi"
                    value={isWifi}
                    setValue={setIsWifi}
                />
                <FormGroup
                    heading="isTV"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isTV"
                    value={isTV}
                    setValue={setIsTV}
                />
                <FormGroup
                    heading="isHarmonic"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isHarmonic"
                    value={isHarmonic}
                    setValue={setIsHarmonic}
                />
                <FormGroup
                    heading="isInternet"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isInternet"
                    value={isInternet}
                    setValue={setIsInternet}
                />
                <FormGroup
                    heading="isWashingMachine"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isWashingMachine"
                    value={isWashingMachine}
                    setValue={setIsWashingMachine}
                />
                <FormGroup
                    heading="isBathTools"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isBathTools"
                    value={isBathTools}
                    setValue={setIsBathTools}
                />
                <FormGroup
                    heading="isRefrigerator"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isRefrigerator"
                    value={isRefrigerator}
                    setValue={setIsRefrigerator}
                />
                <FormGroup
                    heading="isElectricStove"
                    typeInput="checkbox"
                    classNameFromGroup={cx('from-group')}
                    classNameFromControl={cx('form-control')}
                    name="isElectricStove"
                    value={isElectricStove}
                    setValue={setIsElectricStove}
                />
                <FormGroup
                    heading="isBalcony"
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
