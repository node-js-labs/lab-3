// You might switch between implementations by configuration.
const bookRepo = require('../repositories/bookRepoPromise');

exports.getAllBooks = async () => {
  return bookRepo.findAll();
};

exports.searchBooks = async (query) => {
  const allBooks = await bookRepo.findAll();
  if (!query) return allBooks;
  // Simple filter on title, author, or keywords:
  return allBooks.filter(book => 
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.author.toLowerCase().includes(query.toLowerCase()) ||
    (book.keywords && book.keywords.some(k => k.toLowerCase().includes(query.toLowerCase())))
  );
};

exports.createBook = async (bookData) => {
  return bookRepo.create(bookData);
};

exports.getBookById = async (id) => {
  return bookRepo.findById(id);
};

exports.updateBook = async (id, bookData) => {
  return bookRepo.update(id, bookData);
};

exports.deleteBook = async (id) => {
  return bookRepo.delete(id);
};
