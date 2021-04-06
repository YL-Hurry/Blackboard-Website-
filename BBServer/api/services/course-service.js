'use strict';
const mongoose = require('mongoose');
const Course = mongoose.model('courses');

exports.search = (params) => {
    const promise = Course.find(params).exec();
    return promise;
};
exports.save = (course) => {
    const newCourse = new Course(course);
    const promise = newCourse.save();
    return promise;
};
exports.get = (courseId) => {
    const promise = Course.findById(courseId).exec();
    return promise;
};
exports.update = (course) => {
    course.ed_date = new Date();
    const promise = Course.findOneAndUpdate({_id: course._id}, course).exec();
    return promise;
};
exports.delete = (courseId) => {
    const promise = Course.remove({_id: courseId});
    return promise;
};
