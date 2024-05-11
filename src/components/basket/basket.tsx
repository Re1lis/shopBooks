import { useState } from 'react';
import { Link } from 'react-router-dom';
import books from '../../../books.json';
import './basket.css'
import Button from '../Button/button';

export default function Cart() {
    const [cartItems, setCartItems] = useState(books.map(book => ({ ...book, quantity: 1 })));

    const updateQuantity = (index: number, quantity: number) => {
        const updatedItems = [...cartItems];
        updatedItems[index].quantity = quantity;
        setCartItems(updatedItems);
    };
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.priceBook * item.quantity), 0);
    };

    return (
        <>
            <h3 className="title-basket">Корзина</h3>

            <div className="container-basket">
                <div className="left-side-basket">
                    <div className="delete-all">
                        <button className='delete-all-button'>Очистить корзину</button>
                    </div>
                    <div className="container-items-basket">
                        <ul className="list-books-basket">
                            {cartItems.map((item, index) => (
                                <li key={index} className="item-book-list">
                                    <div>
                                    <img src={item.image} alt={item.title} className='book-image-list' />
                                    <h5 className="title-book-cart">{item.title}</h5>
                                    </div>
                                   <div>
                                   <div className="counter-books">
                                        <button
                                            className="counter-button"
                                            onClick={() => updateQuantity(index, item.quantity + 1)}>
                                            +
                                        </button>
                                        <h5 className="count-book">
                                            {item.quantity}
                                        </h5>
                                        <button
                                            className="counter-button"
                                            onClick={() => updateQuantity(index, Math.max( item.quantity - 1))}>
                                            -
                                        </button>
                                    </div>
                                    <p className="item-price">Цена: {item.priceBook * item.quantity}руб.</p>
                                    <button className="delete-book-list">X</button>
                                   </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="right-side-basket">
                    <Link to={'/'}>
                        <button className="checkout-button">
                            Перейти к оформлению
                        </button>
                    </Link>
                    <p className="description-basket">
                        Выбрать способ оплаты, а также адрес и способ доставки, можно при оформлении заказа
                    </p>
                    <h5 className="subtitle-right-side-basket">
                        Ваша корзина
                    </h5>
                    <h6 className="paragraph-right-side-basket">
                        Количество товаров: {cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </h6>
                    <h6 className="paragraph-right-side-basket">
                        Стоимость: {getTotalPrice()}руб.
                    </h6>
                </div>
            </div>
        </>
    );
}
