import { combineReducers } from "redux";
import searchBook from "./searchBookReducer";
import wishlist from "./wishlistReducer";

const rootReducer = combineReducers({
  searchBook,
  wishlist,
});

export default rootReducer;