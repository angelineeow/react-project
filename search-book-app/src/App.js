import "./App.css";
import SearchBar from './components/SearchBar/SearchBar';
import SearchResult from './components/SearchResult/SearchResult';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searchBookReducer from './reducers/searchBookReducer';

const store = createStore(searchBookReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <section className="searchBook">
          <SearchBar />
          <SearchResult />
        </section>
        <section className="wishlist">
        </section>
      </div>
    </Provider>
  );
}

export default App;
