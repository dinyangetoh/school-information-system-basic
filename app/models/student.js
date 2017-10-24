var mongoose = require('mongoose');

// Setup schema
var studentSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    gender: String,
    state: String,
    dob: String,
    marital_status: String,
    email: String,
    phone: String,
    institution: String,
    department: String,
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

module.exports.getInstitutions = [
    'University of Uyo',
    'University of Port Harcourt',
    'University of Nigeria',
    'University of Lagos',
    'University of Calabar'
];

module.exports.getDepartments = [
    'Accounting',
    'Medicine and Surgery',
    'Computer Science',
    'Banking and Finance',
    'Law',
    'Electrical/Electronics Engineering'
];

module.exports.getStates = [
    'Abia',
    'Adamawa',
    'Akwa Ibom',
    'Anambra',
    'Bauchi',
    'Bayelsa',
    'Benue',
    'Borno',
    'Cross River',
    'Delta',
    'Ebonyi',
    'Edo',
    'Ekiti',
    'Enugu',
    'Federal Capital Territory',
    'International',
    'Gombe',
    'Imo',
    'Jigawa',
    'Kaduna',
    'Kano',
    'Katsina',
    'Kebbi',
    'Kogi',
    'Kwara',
    'Lagos',
    'Nasarawa',
    'Niger',
    'Ogun',
    'Ondo',
    'Osun',
    'Oyo',
    'Plateau',
    'Rivers',
    'Sokoto',
    'Taraba',
    'Yobe',
    'Zamfara'
];