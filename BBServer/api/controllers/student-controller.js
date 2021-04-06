'use strict';

const studentService = require('../services/student-service');

exports.list = function (request, response) {
    const resolve = (students) => {
        response.status(200);
        response.json(students);
    };
    studentService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.post = function (request, response) {
    const newStudent = Object.assign({}, request.body);
    const resolve = (student) => {
        response.status(200);
        response.json(student);
    };
    studentService.save(newStudent)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.get = function (request, response) {
    const resolve = (student) => {
        response.status(200);
        response.json(student);
    };
    studentService.get(request.params.studentEmail)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.getId = function (request, response) {
    const resolve = (student) => {
        response.status(200);
        response.json(student);
    };
    studentService.getId(request.params.studentId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.patch = function (request, response) {
    console.log("Inside Patch");
    const student = Object.assign({}, request.body);
    const resolve = (student) => {
        response.status(200);
        response.json(student);
    };
    // student._id = request.params.studentId;
    studentService.update(student)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
exports.put = function (request, response) {
    const student = Object.assign({}, request.body);
    const resolve = (student) => {
        response.status(200);
        response.json(student);
    };
    student._id = request.params.studentId;
    studentService.updateid(student)
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
    };
    return errorCallback;
};
