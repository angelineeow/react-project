import React from 'react'
import SearchBar from './SearchBar/SearchBar';
import SearchResult from './SearchResult/SearchResult';
import "./Home.css";

export default function Home() {
  return (
    <section className="searchBook">
      <SearchBar />
      <SearchResult />
    </section>
  )
};