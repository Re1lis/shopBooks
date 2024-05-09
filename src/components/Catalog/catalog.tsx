import './catalog.css'
import { Link } from "react-router-dom";
import Button from "../Button/button.tsx";
import books from '../../../books.json'



export default function Catalog() {
      
      

    return (
        <>
            <h2 className="title-section">Каталог книг</h2>
            <ul className="list-books">
                {books.map((books, index) => (
                    <li key={index} className="item-book-list">
                        <Link to={`/books/${index}`} className="image-book">
                            {books.image ? ( 
                                <img src={books.image} alt={books.title} className="image-book" />
                            ) : (
                                <h3 className="no-image-text">Изображение не найдено</h3>
                            )}
                        </Link>
                        <Link to={`/books/${index}`}>
                            <h3 className="title-book">{books.title}</h3>
                        </Link>
                        <p className="year-text">Год написания: {books.year}</p>
                        <p className="price-text">Цена: {books.priceBook} руб.</p>
                        <Button text="Купить"  />
                    </li>
                ))}
            </ul>
        </>
    );
}
