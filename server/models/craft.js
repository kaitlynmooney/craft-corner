const { Schema, model } = require("mongoose");

const craftSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
});

const Craft = model("Craft", craftSchema);

module.exports = Craft;
