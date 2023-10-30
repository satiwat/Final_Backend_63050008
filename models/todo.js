const { Numbers } = require("@mui/icons-material");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    title: { type: String, required: true },
    income: { type: Number, required: true },
    expense: { type: Number, required: true },
  },
  {
    collection: "todos",
    timestamps: true,
  }
);

const model = mongoose.model("Todo", schema);

module.exports = model;
