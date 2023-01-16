import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.css";

export default function SearchBar() {
    const [searchBookName, setSearchBookName] = useState("");
    const dispatch = useDispatch();
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${searchBookName}&startIndex=0&maxResults=20`;

    const handleChange = (e) => {
        setSearchBookName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchBookName.trim() === "") {
            return;
        } else{
            fetch(URL)
                .then((res) => res.json())
                .then((res) => dispatch({
                    type: "GET_BOOKS",
                    payload: res.items
                }))
        }
    };

    return (
        <div className="searchBar">
            <form className="searchBar__form">
                <input 
                    type="text"
                    className="searchBar__input"
                    onChange={handleChange}
                    value={searchBookName}
                />
                <button className="searchBar__btn--submit" onClick={handleSubmit} type="submit">
                    submit
                </button>
            </form>
        </div>
    );
};
