'use strict';
const courseService = require('../services/course-service');
exports.list = function (req, res) {
    const resolve = (courses) => {
        res.status(200);
        res.json(courses);
        console.log('All courses listed!');
    };
    courseService.search({})
        .then(resolve)
        .catch(renderErrorResponse(res));
};
exports.post = function (req, res) {
    const newCourse = Object.assign({}, req.body);
    const resolve = (course) => {
        res.status(200);
        res.json(course);
        console.log('Post successfully!');
    };
    courseService.save(newCourse)
        .then(resolve)
        .catch(renderErrorResponse(res));
};
exports.get = function (req, res) {
    const resolve = (course) => {
        res.status(200);
        res.json(course);
    };
    courseService.get(req.params.courseId)
        .then(resolve)
        .catch(renderErrorResponse(res));
};
exports.put = function (req, res) {
        const course = Object.assign({}, req.body);
        const resolve = (course) => {
            res.status(200);
            res.json(course);
        };
        course._id = req.params.courseId;
        courseService.update(course)
            .then(resolve)
            .catch(renderErrorResponse(res));
};
exports.delete = function (req, res) {
    const resolve = (course) => {
        res.status(200);
        res.json({
            message: 'Deleted'
        });
    };
    courseService.delete(req.params.courseId)
        .then(resolve)
        .catch(renderErrorResponse(res));
};
let renderErrorResponse = (res) => {
    const errorCallback = (error) => {
        if (error) {
            res.status(500);
            res.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};
