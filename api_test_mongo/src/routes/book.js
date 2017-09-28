import express from 'express';
import { getAll, addBook, getOne, deleteBook, updateBook } from '../controllers/BookController';

const router = express.Router();

router.get('/books', getAll);
router.post('/books', addBook);
router.get('/books/:id', getOne);
router.delete('/books/:id', deleteBook);
router.put('/books/:id', updateBook);

export default router;
