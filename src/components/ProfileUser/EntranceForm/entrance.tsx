import { useState } from "react";
import './entrance.css'
import lock from '/icons/lock.svg'
import lockClose from '/icons/lock-keyhole.svg'
import key from '/icons/key.svg'
import phoneIcon from '/icons/phone.svg'
import emailIcon from '/icons/mail.svg'
import { Link } from "react-router-dom";
import Button from "../../Button/button";

export default function Entrance () {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [lockIcon, setLockIcon] = useState(lock);

  
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setLockIcon(showPassword ? lock : lockClose);
    };
    return(
        <>
            <h3 className="title-entrance">Вход</h3>

            <div className="all-container-entrance">
                <div className="container-main-entrance">
                <form action="" className="form-input">
                    <img src={phoneIcon} alt="input-numberPhone" className='image-form' />
                    <input type="tel" placeholder='Введите номер телефона' className="input-entrance" />
                </form>
                <form action="" className="form-input">
                    <img src={emailIcon} alt="input-emailUser" className='image-form' />
                    <input type="email" placeholder='Введите почту' className="input-entrance" />
                </form>
                <form action="" className="form-input">
                    <img src={lockIcon} alt="input-PassUser" className='image-form' />
                    <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    placeholder='Введите пароль'
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-entrance"
                    />
                    <button type="button" onClick={togglePasswordVisibility} className='button-see-pass' title='Посмотреть пароль'>
                        <img src={key} alt="" className='image-form'  />
                    </button>
                </form>

                <div className="buttons">
                        <Link to={'/profile'}>
                            <button className="regist-button">
                                Войти в аккаунт
                            </button>
                        </Link>
                        <Link to={'/register'}>
                        <Button text='У меня еще нет аккуанта'/> 
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}