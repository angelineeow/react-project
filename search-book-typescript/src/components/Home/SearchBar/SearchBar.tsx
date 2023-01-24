import React, { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { fetchBookByKeyword } from "../../../reducers/booksSlice";
import "./SearchBar.css";


export default function SearchBar() {

    const [searchBookName, setSearchBookName] = useState("");
    const dispatch = useAppDispatch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBookName(e.target.value);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (searchBookName.trim() === "") {
            return;
        } else{
            dispatch(fetchBookByKeyword(searchBookName));
        }
    };

    return (
        <div className="searchBar">
            <form className="searchBar__form">
                <input 
                    type="text"
                    className="searchBar__input"
                    onChange={handleInputChange}
                    value={searchBookName}
                />
                <button className="searchBar__btn--submit" onClick={handleSubmit} type="submit">
                    submit
                </button>
            </form>
        </div>
    );
};
