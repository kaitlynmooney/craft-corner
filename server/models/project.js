const { Schema, model} = require('mongoose');

const projectSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        trim: true, 
    },
    instructions :{
        type: String, 
        required: true,
    },
    pricePoint: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    }

});

const Project = model('Project', projectSchema);

module.exports = Project;