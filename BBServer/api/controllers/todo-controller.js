'use strict';

const todoService = require('../services/todo-service');

exports.list = function (request, response) {
    const resolve = (todos) => {
        response.status(200);
        response.json(todos);
    };
    todoService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.post = function (request, response) {
    const newTodo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todoService.save(newTodo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.get = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todoService.get(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.put = function (request, response) {
    console.log('c-put');
    const todo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todo._id = request.params.todoId;
    todoService.update(todo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.delete = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json({
            message: 'Events Successfully deleted'
        });
    };
    todoService.delete(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};
