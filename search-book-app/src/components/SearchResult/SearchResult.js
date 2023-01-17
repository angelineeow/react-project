import { useDispatch, useSelector } from "react-redux";
import "./SearchResult.css";

export default function SearchResult() {

    const searchResult = useSelector((state) => state.searchBook);
    const dispatch = useDispatch();

    const addToWishlist = (id, title) => {
        return {
          type: "ADD_WISHLIST",
          payload: {
              id,
              title
            }
        };
    };

    return (
        <div className="searchResult">
            <ul className="searchResult__content">
                {searchResult?.map((book) => { return(
                    <li className="searchResult__container" key={book.id} onClick={() => dispatch(addToWishlist(book.id, book.volumeInfo.title))}>
                        
\                       <section className="searchResult__image">
                            <img id={book.id} src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.description} />
                        </section>

                        <section className="searchResult__info">
                            <h1>{book.volumeInfo.title}</h1>
                            <p><b>Author(s): </b> {book.volumeInfo.authors ? book.volumeInfo.authors : "Unknown"}</p>
                            <p><b>Publishers: </b> {book.volumeInfo.publisher ? book.volumeInfo.publisher : "Unknown"}</p>
                            <p><b>Published date: </b> {book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : "Unknown"}</p>
                            <p><b>Description: </b> {book.volumeInfo.description ? book.volumeInfo.description : "None" }</p>
                        </section>

                    </li>
                )})}
            </ul>

        </div>
    );
}