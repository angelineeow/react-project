
const searchBook = function (
    searchBook = [],
    action
) {
    switch(action.type) {
        case "GET_BOOKS":
            return action.payload;
        default:
            return searchBook;
    }
}

export default searchBook;