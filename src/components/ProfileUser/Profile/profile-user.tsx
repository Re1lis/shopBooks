import React, { useState } from 'react';
import './profile-user.css';
import Button from '../../Button/button';

export default function Profile() {
    const [activeSection, setActiveSection] = useState('profile'); 

    return (
        <>
            <h5 className="title-profile-user">
                Профиль пользователя
            </h5>

            <div className="container-profile">
                <div className="left-side">
                    <ul className="list-section">
                        <li className="item-list" onClick={() => setActiveSection('profile')}>
                            Основная инф.
                        </li>
                        <li className="item-list" onClick={() => setActiveSection('orders')}>
                            Заказы
                        </li>
                    </ul>
                </div>
                {activeSection === 'profile' && (
                    <div className="profile-cont">
                        <div className="name-surname">
                            <h4 className="subtitle-profile">
                                Имя: Иван
                            </h4>
                            <h4 className="subtitle-profile">
                                Фамилия: Иванов
                            </h4>
                        </div>
                        <h4 className="subtitle-profile">
                            Номер телефона: +7999999999
                        </h4>
                        <h4 className="subtitle-profile">
                            Почта: 123@gmail.com
                        </h4>
                    </div>
                )}

                {activeSection === 'orders' && (
                    <div className="orders-container">
                        <h5 className="subtitle-profile-user">Ваши заказы</h5>

                        <ul className="list-orders">
                            <li className="item-order-list">
                                <h4>Заказ от: 20.02.20</h4>
                                <Button text='Подробнее'/>
                            </li>
                            <li className="item-order-list">
                                <h4>Заказ от: 20.02.20</h4>
                                <Button text='Подробнее'/>
                            </li>
                            <li className="item-order-list">
                                <h4>Заказ от: 20.02.20</h4>
                                <Button text='Подробнее'/>
                            </li>
                            <li className="item-order-list">
                                <h4>Заказ от: 20.02.20</h4>
                                <Button text='Подробнее'/>
                            </li>
                            <li className="item-order-list">
                                <h4>Заказ от: 20.02.20</h4>
                                <Button text='Подробнее'/>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
