import express from 'express';
import {getAll, addBook, BookById, updateBook, deleteBook} from '../controllers/BookController';

const router = express.Router();

router.get('/books', getAll);
router.post('/books',addBook);
router.get('/books/:id', BookById);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
