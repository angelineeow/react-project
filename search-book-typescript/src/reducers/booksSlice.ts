import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';


// Define a type for the slice state
export interface IBook {
    id: string,
    volumeInfo: {
        title: string;
        authors: string[];
        publisher: string;
        publishedDate: string; 
        description: string;
        imageLinks: { thumbnail: string; };
    };
}

export interface IBookState {
    bookInfo: IBook[],
    isLoading: boolean
}
  
// Define the initial state using that interface
const initialState: IBookState = {
    bookInfo: [],
    isLoading: false
}

export const fetchBookByKeyword = createAsyncThunk('books/fetchByKeyword',
    async (bookName: string) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&startIndex=0&maxResults=20`)
        const data = await response.json();
        return data.items as IBook[];
    }
)
  
export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBookByKeyword.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchBookByKeyword.fulfilled, (state, action) => {
            state.bookInfo = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchBookByKeyword.rejected, (state) => {
            state.bookInfo = []
            state.isLoading = false
        })
    }
})
      
export default booksSlice.reducer;