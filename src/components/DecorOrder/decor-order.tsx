import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/button';
import './decor-order.css'

export default function DecorOrder() {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    const handleButtonClick = (name: string) => {
        setSelectedButton(name);
    };

    return (
        <>
            <h3 className="title-order-section">Оформление заказа</h3>

            <div className="all-container-order">
                <div className="main-container-decor-order">
                    <h4 className="arrive-order">Выберите способ доставки</h4>
                    <div className="buttons-block">
                        <button
                            className={`button-order ${selectedButton === 'pickup' ? 'selected' : ''}`}
                            onClick={() => handleButtonClick('pickup')}
                        >
                            В пункт выдачи
                        </button>
                        <button
                            className={`button-order ${selectedButton === 'homeDelivery' ? 'selected' : ''}`}
                            onClick={() => handleButtonClick('homeDelivery')}
                        >
                            На дом
                        </button>
                    </div>

                    <div className="all-input">
                        <input type="text" className="input-order" placeholder='Имя' />
                        <input type="text" className="input-order" placeholder='Фамилия' />
                        <input type="text" className="input-order" placeholder='Отчество (если есть)' />
                        <input type="tel" className="input-order" placeholder='Номер телефона' />
                        <input type="email" className="input-order" placeholder='Почта' />
                        <input type="text" className="input-order" placeholder='Адресс' />
                        <input type="date" className="input-order" />
                        <h4 className="select-buy">
                                Способ оплаты
                            </h4>
                        <select name="" id="" className="input-order">
                            <option value="" className="option">
                                Наличными при доставке
                            </option>
                            <option value="" className="option">
                                Картой онлайн 
                            </option>
                            <option value="" className="option">
                                Картой при доставке 
                            </option>
                        </select>

                        <textarea name="" id="" className="input-order" placeholder='Комментарий к заказу'></textarea>

                        <input type="text" className="input-order" placeholder='Промокод' />

                        <button className="agree-order">Оформить</button>
                        <Link to={'/basket'}>
                            <Button text='Отмена'/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
