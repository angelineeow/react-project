
const wishlist = function (
    wishlist = [],
    action
) {
    switch(action.type){
        case "ADD_WISHLIST":
            return wishlist.some((book) => book.id === action.payload.id) ? wishlist : [...wishlist, action.payload];
        case "DELETE_WISHLIST":
            return wishlist.filter((book) => book.id !== action.payload.id);
        default:
            return wishlist;
    }
}

export default wishlist;