import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { removeFromWishlist } from "../../reducers/wishlistSlice";
import "./Wishlist.css";

export default function Wishlist() {

    const wishlist = useAppSelector((state: RootState) => state.wishlist);
    const dispatch = useAppDispatch();

    return (
        <section className="wishlist">
            <h3 className="wishlist__header">My reading wishlist ({wishlist.length})</h3>
            <ul className="wishlist__content">
                {wishlist?.map((book: {id: string, title: string}) => {
                    const {id, title} = book;
                    return (
                    <li className="wishlist__container" key={id}>
                        <div className="wishlist__title">{title}</div>
                        <button className="wishlist__btn--delete" key={id} onClick={() => dispatch(removeFromWishlist(id))} type="button">delete</button>
                    </li>
                )})}
            </ul>
        </section>

    );

};