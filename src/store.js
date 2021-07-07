import create from "zustand";

const useStore = create((set, get) => ({
  genres: [],
  authors: [],
  books: [],
  setBooks(book) {
    set({ books: book });
  },
  selectedAuthor: null,
  selectedBook: null,
  fetchGenres() {
    fetch(`http://localhost:3000/genres`)
      .then((resp) => resp.json())
      .then((genres) => set({ genres }));
  },
  fetchAuthors() {
    fetch(`http://localhost:3000/authors`)
      .then((resp) => resp.json())
      .then((authors) => set({ authors }));
  },
  fetchBooks() {
    fetch(`http://localhost:3000/books`)
      .then((resp) => resp.json())
      .then((books) => set({ books }));
  },
  inSelectedAuthor(author) {
    set({ selectedAuthor: author });
  },

  inSelectedBook(book) {
    set({ selectedBook: book });
  },
  genre: "All",
  selectedGenre: (event) => {
    console.log(event.target.value);
    set({ genre: event.target.value });
  },
  filterBooks: [],
  getFilteredBooks: () => {
    if (get().genre === "All") {
      set({ filterBooks: get().books });
    } else {
      let filterBooksArray = get().books.filter(
        (target) => target.genre.name === get().genre
      );
      set({ filterBooks: filterBooksArray });
    }
  },
  findBookById: (bookId) => {
    return get().books.find((book) => {
      return book.id === bookId;
    });
  },
}));

export default useStore;
