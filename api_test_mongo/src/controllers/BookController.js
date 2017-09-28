import Book from '../model/book';

// Get all books
async function getAll(req, res) {
  try {
    const result = await Book.find({});
    res.json(result);
  } catch (err) {
    throw err;
  }
}

async function addBook(req, res) {
  try {
    const newBook = {
      id: Date.now(),
      name: req.body.name,
      status: req.body.status,
    };
    const result = await Book.create(newBook);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}

// Get and process Book by Id

async function getOne(req, res) {
  try {
    const result = await Book.findById(req.params.id);
    res.json(result);
  } catch (err) {
    throw err;
  }
}

// Delete data by Id
async function deleteBook(req, res) {
  try {
    const result = await Book.remove({ _id: req.params.id });
    if (result) {
      res.json({
        message: 'Delete successful',
        result,
      });
    }
  } catch (err) {
    throw err;
  }
}

// Update Book by Id
async function updateBook(req, res) {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, status: req.body.status } });
    if (book) {
      res.json({
        message: 'Update successfully',
        book,
      });
    }
  } catch (err) {
    throw err;
  }
}

export { getAll, addBook, getOne, deleteBook, updateBook };
