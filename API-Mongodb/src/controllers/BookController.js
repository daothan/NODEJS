import Book from '../model/Book';

// Get all books
async function getAll (req, res) {
    try {
        const result = await Book.find({});
        res.json(result);
    } catch (err) {
        throw err;
    }
}

// Add Book
async function addBook(req, res){
    try{
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

// Get Book by Id
async function BookById(req, res){
    try{
        const result = await Book.findById(req.params.id);
        res.json(result);
    } catch (err) {
        throw err;
        return;
    }
}

// Update Book By Id
async function updateBook(req, res){
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, {$set: {name: req.body.name, status: req.body.status}});
        if(book) {
            res.json({
                message: 'Updated successfully',
                book,
            });
        }
    }catch(err){
        throw err;
        return;
    }
}

// Delete Book by Id

async function deleteBook (req, res){
    try{
        const book = await Book.remove({_id: req.params.id});
        if(book){
            res.json({
                message: 'Delete successfully',
                book,
            });
        }
    } catch (err){
        throw err;
        return;
    }
}


export { getAll, addBook, BookById, updateBook, deleteBook };
