
const searchBook = function (
    bookState = {
        bookName:[],
        loadingStatus: false},
    action
) {
    switch(action.type) {
        case "SEARCH_BOOKS":
            return {
                ...bookState,
                loadingStatus: true
            };

        case "FOUND_BOOKS":
            return {
                ...bookState,
                bookName: action.payload,
                loadingStatus: false,
            };

        default:
            return bookState;
    }
}

export default searchBook;