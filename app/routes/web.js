// Import express router instance
var router = require('express').Router();
// Import node request module
var request = require('request');

router.use(function(req, res, next) {
    baseUrl = req.protocol + "://" + req.get('host') + req.originalUrl;
    rootUrl = req.protocol + "://" + req.get('host');
    return next();
});

router.get('/', function(req, res) {
    res.redirect('/list');
});
router.get('/list', function(req, res) {
    request(rootUrl + '/api/students', function(error, response, body) {
        var data = JSON.parse(body);
        res.render('index', {
            pageTitle: "School Information System - Basic",
            title: "Home",
            subtitle: "Manage Student information",
            message: req.query.msg,
            students: data.data
        });
    });
});

router.get('/student/view/:id', function(req, res) {
    request.get(rootUrl + '/api/students/' + req.params.id, function(error, response, body) {
        var data = JSON.parse(body);
        res.render('students/view', {
            pageTitle: "School Information System - Basic",
            title: "View Student",
            subtitle: "",
            student: data.data
        });
    });
});

router.get('/student/edit/:id', function(req, res) {
    request.get(rootUrl + '/api/students/' + req.params.id, function(error, response, body) {
        var data = JSON.parse(body);
        res.render('students/edit', {
            student: data.data,
            states: Student.getStates,
            institutions: Student.getInstitutions,
            departments: Student.getDepartments
        });
    });
});

router.post('/student/edit/:id', function(req, res) {
    request({ url: rootUrl + '/api/students/' + req.params.id, method: 'PUT', json: req.body }, function(error, response, body) {
        res.redirect('/student/view/' + req.params.id);
    });
});
router.get('/student/add', function(req, res) {
    res.render('students/new', {
        states: Student.getStates,
        institutions: Student.getInstitutions,
        departments: Student.getDepartments

    });
});

router.post('/student/add', function(req, res) {
    request({ url: rootUrl + '/api/students/', method: 'POST', json: req.body }, function(error, response, body) {
        res.redirect('/list?msg=New Student added');
    });
});



router.get('/student/delete/:id', function(req, res) {
    request.delete(rootUrl + '/api/students/' + req.params.id, function(error, response, body) {
        res.redirect('/list?msg=Student deleted successfully');
    });
});

module.exports = router;