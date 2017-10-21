var mongoose = require('mongoose');

// Setup schema
var studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: String,
    state: String,
    level: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export student model
var Student = module.exports = mongoose.model('student', studentSchema);


module.exports.getStudents = function(callback, limit) {
    Student.find(callback).limit(limit);
}