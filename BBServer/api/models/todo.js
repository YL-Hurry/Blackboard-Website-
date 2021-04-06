'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let TodoSchema = new Schema({
    title: String,
    content: {type: Array, item:String,default:[]},
    alike: {type: Number, default: 0},
    completed: {type: Boolean, default: false},
    createdDate: {type: Date, default: Date.now()}
}, {
    versionKey: false
});
TodoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});
TodoSchema.set('toJSON', {
    virtuals: true
});
module.exports = mongoose.model('todos', TodoSchema);
