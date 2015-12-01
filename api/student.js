/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Student = mongoose.model('Student'),
    _ = require('underscore');


/**
 * Find student by id
 */
exports.student = function(req, res, next, id) {
    console.log("Call api-student function.");

    Student.load(id, function(err, student) {
        if (err) return next(err);
        if (!student) return next(new Error('Failed to load student ' + id));
        req.student = student;
        next();
    });
};

/**
 * Create a student
 */
exports.create = function(req, res) {
    console.log("Call api-create function.");
    var student = new Student(req.body);

    student.save(function(err) {
        if (err) {
            return res.status('users/signup').send({
                errors: err.errors,
                student: student
            });
        } else {
            res.jsonp(student);
        }
    });
};

/**
 * Update a student
 */
exports.update = function(req, res) {
    console.log("Call api-update function.");
    var student = req.student;

    student = _.extend(student, req.body);

    student.save(function(err) {
        res.jsonp(student);
    });
};

/**
 * Delete an student
 */
exports.destroy = function(req, res) {
    console.log("Call api-destroy function.");
    var student = req.student;

    student.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(student);
        }
    });
};

/**
 * Show an student
 */
exports.show = function(req, res) {
    console.log("Call api-show function.");
    res.jsonp(req.student);
};

/**
 * List of students
 */
exports.all = function(req, res) {
    console.log("Call api-all function.");
    Student.find().exec(function(err, students) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(students);
        }
    });
};