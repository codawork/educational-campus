const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
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
    code: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    content: Array,
    exam: Array,
  },
  { timestamps: true }
);

courseSchema.statics.findByCode = async (code) => {
  return await Course.findOne({ code });
};

module.exports = model("Course", courseSchema);
