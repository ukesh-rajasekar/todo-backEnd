const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A todo must have a name'],
        trim: true,
        maxLength: [40, 'A todo must have a max length of 40']
        // validate: [validator.isAlpha, 'name should only contain characters']
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;