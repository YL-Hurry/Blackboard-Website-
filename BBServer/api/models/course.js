'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let CourseSchema = new Schema({
    weekTime: Number,
    dayTime: Number,
    subject: String,
    courseName: String,
    courseNumber: String,
    professor: String,
    courseDetail: String
}, {
    versionKey: false
});
CourseSchema.virtual('id').get(function(){
    return this._id.toHexString();
});
CourseSchema.set('toJSON', {
    virtuals: true
});
module.exports = mongoose.model('courses', CourseSchema);
