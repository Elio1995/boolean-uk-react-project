import create from "zustand";

const useStore = create((set, get) => ({
  genres: [],
  authors: [],
  books: [],
  users: [],
  setBooks(book) {
    set({ books: book });
  },
  selectedAuthor: null,
  selectedBook: null,
  currentUser: null,
  login(user) {
    set({ currentUser: user });
  },
  logout() {
    set({ currentUser: null });
  },
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
  fetchUsers() {
    fetch(`http://localhost:3000/users`)
      .then((resp) => resp.json())
      .then((users) => set({ users }));
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
  getFilteredBooks: () => {
    if (get().genre === "All" && get().searchBooks === "") {
      return get().books;
    }
    if (get().genre === "All" && get().searchBooks !== "") {
      let filterBooksArray = get().books.filter((book) =>
        book.title.toLowerCase().includes(get().searchBooks.toLowerCase())
      );
      return filterBooksArray;
    }
    if (get().genre !== "All" && get().searchBooks === "") {
      let filterBooksArray = get().books.filter(
        (target) => target.genre.name === get().genre
      );
      return filterBooksArray;
    }
    let filterBooksArray = get().books.filter(
      (target) => target.genre.name === get().genre
    );
    filterBooksArray = get().books.filter((book) =>
      book.title.toLowerCase().includes(get().searchBooks.toLowerCase())
    );

    return filterBooksArray;
  },
  findBookById: (bookId) => {
    return get().books.find((book) => {
      return book.id === bookId;
    });
  },
  searchBooks: "",
  // getSearchBooks: () => {
  //   let searchBooksVar = get().books.filter((book) =>
  //     book.title.toLowerCase().includes(get().searchBooks.toLowerCase())
  //   );
  //   return searchBooksVar;
  // },
  updateSearchBooks: (newSearchBook) => {
    set({ searchBooks: newSearchBook });
    console.log("NEW SEARCH", newSearchBook);
  },
}));

export default useStore;
