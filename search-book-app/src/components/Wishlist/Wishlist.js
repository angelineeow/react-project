import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Wishlist.css";

export default function Wishlist() {

    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
      
    const deleteWishlist = (id) => {
        return {
          type: "DELETE_WISHLIST",
          payload: {
              id
            }
        };
    };

    const handleDelete = (e) => {
        dispatch(deleteWishlist(e.target.id));
    }

    return (
        <section className="wishlist">
            <h3 className="wishlist__header">My reading wishlist ({wishlist.length})</h3>
            <ul className="wishlist__content">
                {wishlist?.map((book) => {return (
                    <li className="wishlist__container" key={book.id}>
                        <div className="wishlist__title">{book.title}</div>
                        <button className="wishlist__btn--delete" id={book.id} onClick={handleDelete} type="button">delete</button>
                    </li>
                )})}
            </ul>
        </section>

    );

};