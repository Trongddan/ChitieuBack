// const Book = require("../model/Book");
// const BookController = {
//   addBook: async (req, res) => {
//     try {
//         const newBook = await new Book(req.body);
//         await newBook.save();
//         return res.status(200).json("Them thanh cong")
//     } catch (error) {
//         return res.status(500).json('that bai')
//     }
//   },
//   deleteBook : async (req, res) => {
//     try {
//         const bookFound = await Book.findByIdAndRemove(req.params.id);
//         return res.status(200).json("xoa thanh cong")
//     } catch (error) {
//         return res.status(500).json('that bai')   
//     }
//   },
//   updateBook: async (req, res) => {
//     try {
//         const bookFound = await Book.findById( req.params.id);
//         await bookFound.updateOne({ $set: req.body });
//         res.status(200).json("update thanh cong");
//     } catch (error) {
//         return res.status(500).json('that bai')   
//     }
//   },
//   getAllBook:async (req, res) => {
//     try {
//         const bookList = await Book.find();
//         res.status(200).json(bookList);
//     } catch (error) {
//         return res.status(500).json('that bai')   
//     }
//   },
// };
// module.exports = BookController
