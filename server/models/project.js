const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  materials: {
    type: Array,
    required: true,
  },
  instructions: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
  },
  pricePoint: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  craft: {
    type: Schema.Types.ObjectId,
    ref: "Craft",
    required: true,
  },
});

const Project = model("Project", projectSchema);

module.exports = Project;
