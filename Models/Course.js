const { Schema, model } = require("mongoose");
const validator = require("validator");

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  //TODO Definir bien las relaciones
  content: Array,
  exam: Array,
  timestamps: true,
});

courseSchema.statics.findByCode = async (code) => {
  const course = await Course.findOne({ code });
  return course;
};
module.exports = model("Course", courseSchema);
