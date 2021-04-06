'use strict';
const mongoose = require('mongoose');
const Student = mongoose.model('students');

exports.search = (params) => {
    const promise = Student.find(params).exec();
    return promise;
};
exports.save = (student) => {
    const newStudent = new Student(student);
    const promise = newStudent.save();
    return promise;
};
exports.get = (studentEmail) => {
    const promise = Student.findOne({email:studentEmail}).exec();
    return promise;
};
exports.getId = (studentId) => {
    const promise = Student.findOne({_id:studentId}).exec();
    return promise;
};
exports.update = (student) => {
    const promise = Student.updateOne({email: student.email}, {$set:{courses:student.courses}}).exec();
    return promise;
};
exports.updateid = (student) => {
    const promise = Student.updateOne({_id: student._id}, student).exec();
    return promise;
};

