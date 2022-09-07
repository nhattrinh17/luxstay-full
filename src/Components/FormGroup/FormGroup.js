import classNames from 'classnames/bind';

import styles from './formGrup.module.scss';

const cx = classNames.bind(styles);

function FormGroup(prop) {
    const {
        heading,
        typeInput,
        name,
        placeholder,
        value,
        setValue,
        minLength,
        icon,
        classNameFromGroup,
        classNameFromControl,
    } = prop;

    const inputHandle = (e) => {
        if (typeInput === 'checkbox') {
            setValue(e.target.checked);
        } else {
            setValue(e.target.value);
        }
    };

    return (
        <div className={cx('form-group', classNameFromGroup)}>
            <h3 className={cx('auth-form__group--lable')}>{heading}</h3>
            {typeInput === 'textarea' ? (
                <textarea
                    name={name}
                    className={cx('form-control', classNameFromControl)}
                    rows="4"
                    cols="50"
                    placeholder={placeholder}
                    rules="repuired"
                    value={value}
                    onChange={inputHandle}
                ></textarea>
            ) : (
                <input
                    type={typeInput}
                    name={name}
                    className={cx('form-control', classNameFromControl)}
                    rules="repuired"
                    minLength={minLength}
                    placeholder={placeholder}
                    value={value}
                    onChange={inputHandle}
                />
            )}

            <span className={cx(`auth-form__input--icon`, icon)}></span>
        </div>
    );
}

export default FormGroup;
