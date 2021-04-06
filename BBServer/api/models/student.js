const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    courses:  {
        type: Array,
        item: {
            id: String,
            weekTime: Number,
            dayTime: Number,
            subject: String,
            courseName: String,
            courseNumber: String,
            courseDetail: String }
    }

},{
    versionKey: false
});
StudentSchema.virtual('id').get(function(){
    return this._id.toHexString();
});
StudentSchema.set('toJSON', {
    virtuals: true
});

module.exports = User = mongoose.model('students', StudentSchema);
