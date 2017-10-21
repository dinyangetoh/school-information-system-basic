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
    student.name = req.body.name;
    student.gender = req.body.gender;
    student.level = req.body.level;
    student.state = req.body.state;

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

        student.name = req.body.name;
        student.gender = req.body.gender;
        student.level = req.body.level;
        student.state = req.body.state;

        // save the student and check for errors
        student.save(function(err) {
            if (err)
                res.json(err);

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