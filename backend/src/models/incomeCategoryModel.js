import mongoose from "mongoose";

const incomeCategoryModel = mongoose.Schema({
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
  "incomeCategoryModel",
  incomeCategoryModel,
  "income_categories"
);
