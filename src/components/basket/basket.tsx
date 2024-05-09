import { useEffect, useState } from "react";

interface Book {
    image: string;
    title: string;
    year: number;
    priceBook: number;
    id: number;
}

export default function Cart () {
    const [books, setBooks] = useState<Book[]>([]);    

    useEffect(() => {
        fetch('books.json')
          .then(response => response.json())
          .then(data => {
              setBooks(data);
          });
      }, []);
      
    return(
        <>
            <h3 className="title-basket">Корзина</h3>

            <div className="container-basket">
                <div className="left-side-basket">
                    <div className="delete-all">

                    </div>
                    <div className="container-items-basket">

                    </div>
                </div>
                <div className="right-side-basket">
                    <button className="button-right-side">
                        Перейти к оформлению
                    </button>
                    <p className="description-basket">
                        Выбрать способ оплаты, а также адрес и способ доставки, можно при оформлении заказа
                    </p>
                    <h5 className="subtitle-right-side-basket">
                        Ваша корзина
                    </h5>
                    <h6 className="paragraph-right-side-basket">
                        Количество товаров:
                    </h6>
                    <h6 className="paragraph-right-side-basket">
                        Стоимость:
                    </h6>
                </div>    
            </div> 
        </>
    )
}