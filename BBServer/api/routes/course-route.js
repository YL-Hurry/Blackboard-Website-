'use strict';

module.exports = function (app) {
    const courseController = require('../controllers/course-controller');
    app.route('/courses')
        .get(courseController.list)
        .post(courseController.post);
    app.route('/courses/:courseId')
        .get(courseController.get)
        .put(courseController.put)
        .delete(courseController.delete);
};
