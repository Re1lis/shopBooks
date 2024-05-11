import './register-form.css'
import { useState } from 'react';
import userIcon from '/icons/userProfile.svg'
import phoneIcon from '/icons/phone.svg'
import emailIcon from '/icons/mail.svg'
import lock from '/icons/lock.svg'
import lockClose from '/icons/lock-keyhole.svg'
import key from '/icons/key.svg'
import Button from '../../Button/button';
import { Link } from 'react-router-dom';



export default function RegisterForm () {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [lockIcon, setLockIcon] = useState(lock);

  
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setLockIcon(showPassword ? lock : lockClose);
    };

    return(
        <>
            <h3 className="title-register-form">
                Регистрация
            </h3>

            <div className="all-container-register">
                <div className="container-register-form">
                <div className="name-surname">
                    <form action="" className="form-input">
                        <img src={userIcon} alt="input-name" className='image-form' />
                        <input type="text" placeholder='Введите имя' className="input-regist" />
                    </form>
                    <form action="" className="form-input">
                        <img src={userIcon} alt="input-surname" className='image-form' />
                        <input type="text" placeholder='Введите фамилию' className="input-regist" />
                    </form>
                </div>  
                <form action="" className="form-input">
                    <img src={phoneIcon} alt="input-numberPhone" className='image-form' />
                    <input type="tel" placeholder='Введите номер телефона' className="input-regist" />
                </form>
                <form action="" className="form-input">
                    <img src={emailIcon} alt="input-emailUser" className='image-form' />
                    <input type="email" placeholder='Введите почту' className="input-regist" />
                </form>
                <form action="" className="form-input">
                    <img src={lockIcon} alt="input-PassUser" className='image-form' />
                    <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    placeholder='Введите пароль'
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-regist"
                    />
                    <button type="button" onClick={togglePasswordVisibility} className='button-see-pass' title='Посмотреть пароль'>
                        <img src={key} alt="" className='image-form'  />
                    </button>
                </form>

                    <div className="buttons">
                        <Link to={'/entrance'}>
                            <button className="regist-button">
                                Зарегистрироваться 
                            </button>
                        </Link>
                        <Button text='У меня уже есть аккаунт'/> 
                    </div>
                </div>
            </div>
        </>
    )
}


