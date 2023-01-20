import mongoose from "mongoose";
// we can also write the above line like const mongoose = require ('mongoose')

const Schema = mongoose.Schema;
const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: null,
  },

  tasks: [String],
});

const TodoModel = mongoose.model("Todo", TodoSchema);
export default TodoModel;
