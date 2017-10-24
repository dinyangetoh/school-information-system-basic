// Import student model
Student = require('../models/student');

// Handle index actions
exports.index = function(req, res) {
    Student.getStudents(function(err, students) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Students retrived successfully",
            data: students
        });
    });
};

// Handle create student actions
exports.new = function(req, res) {
    var student = new Student();
    student.first_name = req.body.first_name;
    student.last_name = req.body.last_name;
    student.gender = req.body.gender;
    student.marital_status = req.body.marital_status;
    student.state = req.body.state;
    student.email = req.body.email;
    student.phone = req.body.phone;
    student.dob = req.body.dob;
    student.institution = req.body.institution;
    student.department = req.body.department;

    // save the student and check for errors
    student.save(function(err) {
        if (err)
            res.json(err);

        res.json({
            message: 'New Student created!',
            data: student
        });
    });
};


// Handle view student info
exports.view = function(req, res) {
    Student.findById(req.params.student_id, function(err, student) {
        if (err)
            res.send(err);
        res.json({
            message: 'Student details loading..',
            data: student
        });
    });
};

// Handle update student info
exports.update = function(req, res) {

    Student.findById(req.params.student_id, function(err, student) {
        if (err)
            res.send(err);

        student.first_name = req.body.first_name ? req.body.first_name : student.first_name;
        student.last_name = req.body.last_name ? req.body.last_name : student.last_name;
        student.gender = req.body.gender;
        student.marital_status = req.body.marital_status;
        student.state = req.body.state;
        student.email = req.body.email;
        student.phone = req.body.phone;
        student.dob = req.body.dob;
        student.institution = req.body.institution;
        student.department = req.body.department;


        // save the student and check for errors
        student.save(function(err) {
            // if (err)
            //     res.json(err);

            res.json({
                message: 'Student Info updated',
                data: student
            });
        });
    });
};


// Handle delete student
exports.delete = function(req, res) {
    Student.remove({
        _id: req.params.student_id
    }, function(err, student) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'Student deleted'
        });
    });
};