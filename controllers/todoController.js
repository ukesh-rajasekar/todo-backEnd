const Todo = require('../models/todoModel');
const APIFeatures = require('../apiFeatuers');

exports.createTodo = async (req, res) => {
    try {
        console.log(req.body, '$$$$')

        const newTodo = await Todo.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                todo: newTodo
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed to create todo',
            message: err
        })
    }
}

exports.getTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        res.status(200).json({
            status: 'success',
            data: {
                todo
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed to find todo',
            message: err
        })
    }
}

exports.getAllTodos = async (req, res) => {
    try {
        const features = new APIFeatures(Todo.find(), req.query).filter().sort().limit().paginate();
        const todos = await features.query;
        res.status(200).json({
            status: 'success',
            data: {
                todos
            },
            meta: {
                count: todos.length
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed to find todo',
            message: err
        })
    }
}


exports.updateTodo = async (req, res) => {
    try {
        console.log(req, 'update here')

        const { id } = req.params;
        const { update } = req.body;
        console.log(update, 'update here')
        const updatedTodo = await Todo.findByIdAndUpdate(id, update, {
            new: true
        });
        console.log(updatedTodo)
        res.status(200).json({
            status: 'success',
            data: {
                todo: updatedTodo
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed to find todo',
            message: err
        })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            status: 'success'
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed to delete todo',
            message: err
        })
    }
}