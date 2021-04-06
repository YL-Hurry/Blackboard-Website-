'use strict';

module.exports = function (app) {
    const todoController = require('../controllers/todo-controller');
    app.route('/todos')
        .get(todoController.list)
        .post(todoController.post);
    app.route('/todos/:todoId')
        .get(todoController.get)
        .put(todoController.put)
        .delete(todoController.delete);
};
