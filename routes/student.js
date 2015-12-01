var async = require('async');

module.exports = function(app) {
    // Routes
    var students = require('../api/student');
    app.get('/students', students.all);
    app.post('/students', students.create);
    app.get('/students/:studentId', students.show);
    app.put('/students/:studentId', students.update);
    app.delete('/students/:studentId', students.destroy);

    // Finish with setting up the studentId param
    app.param('studentId', students.student);
};