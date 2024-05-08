import { useState, useEffect } from "react";
import './catalog.css'
import { Link } from "react-router-dom";
import Button from "../Button/button.tsx";

interface Book {
    image: string;
    title: string;
    year: number;
    priceBook: number;
    textButton: string;
    id: number;
}

export default function Catalog () {
    const [books, setBooks] = useState<Book[]>([]);    
    useEffect(() => {
        fetch('books.json')
          .then(response => response.json())
          .then(data => {
              const booksWithButtonText = data.map((book: Book) => ({
                  ...book,
                  textButton: 'Купить' 
              }));
              setBooks(booksWithButtonText);
          });
      }, []);

    return (
        <>
            <h2 className="title-section">Каталог книг</h2>
            <ul className="list-books">
                {books.map((book, index) => (
                    <li key={index} className="item-book-list">
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
                    <p className="year-text">Год написания: {book.year}</p>
                    <p className="price-text">Цена: {book.priceBook} руб.</p>
                    <Button text={book.textButton} />
                </li>
                
                ))}
            </ul>
        </>
    )
}