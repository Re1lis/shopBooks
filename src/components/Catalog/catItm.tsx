import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/button.tsx';

interface CatalogItemProps {
    book: {
        title: string;
        image: string;
        priceBook: number;
    };
    index: number;
    updateCart: (index: number) => void;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ book, index, updateCart }) => {
    return (
        <li className="item-book-list">
            <Link to={`/books/${index}`} className="image-book">
                {book.image ? ( 
                    <img src={book.image} alt={book.title} className="image-book" />
                ) : (
                    <h3 className="no-image-text">Изображение не найдено</h3>
                )}
            </Link>
            <Link to={`/books/${index}`}>
                <h3 className="title-book">{book.title}</h3>
            </Link>
            <p className="price-text">Цена: {book.priceBook} руб.</p>
            <Button text="Купить" onClick={() => updateCart(index)} />
        </li>
    );
}

export default CatalogItem;
