'use strict';

module.exports = function (app) {
    let courseModel = require('./models/course');
    let courseRoutes = require('./routes/course-route');
    courseRoutes(app);
    let todoModel = require('./models/todo');
    let todoRoutes = require('./routes/todo-route');
    todoRoutes(app);
    let studentModel = require('./models/student');
    let studentRoutes = require('./routes/student-route');
    studentRoutes(app);
};
