import mongoose from "mongoose";

const expenseCategoryModel = mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  fixed: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model(
  "expenseCategoryModel",
  expenseCategoryModel,
  "expense_categories"
);
