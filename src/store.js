import create from "zustand";

const useStore = create((set, get) => ({
  genres: [],
  authors: [],
  books: [],
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
}));
export default useStore;
