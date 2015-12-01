var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    address: String
});

/**
 * Statics
 */
StudentSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

var Student = mongoose.model('Student', StudentSchema);

