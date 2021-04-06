'use strict';
const mongoose = require('mongoose');
const Todo = mongoose.model('todos');

exports.search = (params) => {
    const promise = Todo.find(params).exec();
    return promise;
};
exports.save = (todo) => {
    const newTodo = new Todo(todo);
    const promise = newTodo.save();
    return promise;
};
exports.get = (todoId) => {
    const promise = Todo.findById(todoId).exec();
    return promise;
};
exports.update = (todo) => {
    const promise = Todo.findOneAndUpdate({_id: todo._id}, todo).exec();
    return promise;
};
exports.delete = (todoId) => {
    const promise = Todo.remove({_id: todoId});
    return promise;
};
