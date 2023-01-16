import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchResult.css";

export default function SearchResult() {

    const searchResult = useSelector((state) => state.searchBook);
    const dispatch = useDispatch();

    const addToWishlist = (id) => {
        return {
          type: "ADD_WISHLIST",
          payload: id  
        };
    };

    return (
        <div className="searchResult">
            <ul className="searchResult__content">
                {searchResult?.map((book) => (
                    <li className="searchResult__container" key={book.id} onClick={() => dispatch(addToWishlist(book.id, book.volumeInfo.title))}>
                        {/* image of the book */}
                        <section className="searchResult__image">
                            <img id={book.id} src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.description} />
                        </section>

                        {/* information of the book */}
                        <section className="searchResult__info">
                            <h1>{book.volumeInfo.title}</h1>
                            <p><b>Author(s): </b> {book.volumeInfo.authors}</p>
                            <p><b>Publishers: </b> {book.volumeInfo.publisher}</p>
                            <p><b>Published date: </b> {book.volumeInfo.publishedDate}</p>
                            <p><b>Description: </b> {book.volumeInfo.description}</p>
                        </section>

                    </li>
                ))}
            </ul>

        </div>
    );
}