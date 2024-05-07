import React from "react";
import { useParams } from "react-router-dom";
import './bookpage.css'
import Button from "../Button/button";

interface Book {
    image: string;
    title: string;
    year: number;
    priceBook: number;
    genre: string;
    NumberOfPages: number;
    AgeLimit: string;
    aboutBook: string;
}

interface Props {
    books: Book[];
}

const BookPage: React.FC<Props> = ({ books }) => {
    const { index } = useParams<{ index?: string }>();
    const bookIndex = index ? parseInt(index) : NaN;
    const book = !isNaN(bookIndex) && books[bookIndex];

    if (!book) {
        return <div className="error-search">Книга не найдена</div>;
    }



    return (
        <>
        <div className="container">
            {book.image ? ( 
                <img src={book.image} alt={book.title} className="image-book" />
            ) : (
                <h3 className="no-image-text">Изображение не найдено</h3>
            )}
            <div className="right-side">
                <h4 className="section-title">О книге</h4>
                <h5 className="paragraph"><span>Название:</span> {book.title}</h5>
                <h5 className="paragraph"><span>Автор:</span> Тим Порт</h5>
                <h5 className="paragraph"><span>Возрастное <br /> ограничение:</span> {book.AgeLimit}</h5>
                <h5 className="paragraph"><span>Цена:</span> {book.priceBook} рублей</h5>
                <a href="#charact-desc" className="characteristics">Перейти к характеристикам</a>
                <Button text="Купить"/>
            </div>            
        </div>
            <h2 className="characteristics-description" id="charact-desc">Описание и характеристики</h2>
            <div className="block-characteristics">
               <div>
                <div className="about-book">
                    <span className="about-book-title">
                        Название: {book.title}
                    </span>
                </div>
                <div className="about-book">
                    <span className="about-book-title">
                        Год выпуска: {book.year}
                    </span>
                </div>
                <div className="about-book">
                    <span className="about-book-title">
                        Жанр книги: {book.genre}
                    </span>
                </div>
                <div className="about-book">
                    <span className="about-book-title">
                        Количество страниц: {book.NumberOfPages}
                    </span>
                </div>
                <div className="about-book">
                    <span className="about-book-title">
                        Возрастное ограничение: {book.AgeLimit}
                    </span>
                </div>
               </div>
                <p className="description-book">
                    {book.aboutBook}
                </p>
            </div>
        </>
    );
};

export default BookPage;
