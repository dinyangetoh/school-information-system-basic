// Import express router instance
var router = require('express').Router();

// Import student controller
var student_controller = require('../controllers/studentController');

// Set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Basic School Information system crafted by David !',
    });
});

// Student routes
router.route('/students')
    .get(student_controller.index)
    .post(student_controller.new);

router.route('/students/:student_id')
    .get(student_controller.view)
    .patch(student_controller.update)
    .put(student_controller.update)
    .delete(student_controller.delete);



// Export the express router 
module.exports = router;