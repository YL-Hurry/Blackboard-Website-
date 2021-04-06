'use strict';

module.exports = function (app) {
    const studentController = require('../controllers/student-controller');
    app.route('/students')
        .get(studentController.list)
        .post(studentController.post);
    app.route('/students/:studentEmail')
        .get(studentController.get)
        .patch(studentController.patch);
    app.route('/students/:studentId')
        .get(studentController.getId)
        .put(studentController.put);
}

