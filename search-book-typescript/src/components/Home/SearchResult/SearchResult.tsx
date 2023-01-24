import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { IBook } from "../../../reducers/booksSlice";
import { addToWishlist } from "../../../reducers/wishlistSlice";
import "./SearchResult.css";

export default function SearchResult() {

    const searchResult = useAppSelector((state: RootState) => state.books.bookInfo);
    const isLoading = useAppSelector((state: RootState) => state.books.isLoading);
    const dispatch = useAppDispatch();

    return (
        <div className="searchResult">
            {isLoading ? <span className="searchResult__loading">loading</span> :
            <ul className="searchResult__content">
                {searchResult?.map((book: IBook) => { 
                    const { 
                        id, 
                        volumeInfo:
                        {
                            title,
                            authors,
                            publisher,
                            publishedDate,
                            description,
                            imageLinks,
                        } 
                    } = book;
                    return(
                    <li className="searchResult__container" key={id} onClick={() => dispatch(addToWishlist({id, title}))}>
          
                        <section className="searchResult__image">
                            <img id={id} src={imageLinks?.thumbnail} alt={description} />
                        </section>

                        <section className="searchResult__info">
                            <h1>{title}</h1>
                            <p><b>Author(s): </b> {authors ? authors : "Unknown"}</p>
                            <p><b>Publishers: </b> {publisher ? publisher : "Unknown"}</p>
                            <p><b>Published date: </b> {publishedDate ? publishedDate : "Unknown"}</p>
                            <p><b>Description: </b> {description ? description : "None" }</p>
                        </section>

                    </li>
                )})}
            </ul>
            }
        </div>
    );
}