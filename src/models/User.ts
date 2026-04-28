import { Schema, models, model } from "mongoose";

const HeaderDataSchema = new Schema(
  {
    fullName: { type: String, default: null },
    age: { type: String, default: null },
    city: { type: String, default: null },
    sex: {
      type: String,
      enum: ["male", "female"],
      default: null,
    },
  },
  { _id: false },
);

const SavedAnalysisSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
  },
  { _id: true },
);

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: { type: String, default: null },

    headerData: { type: HeaderDataSchema, default: () => ({}) },
    savedAnalyses: { type: [SavedAnalysisSchema], default: [] },
  },
  { timestamps: true },
);

const User = models.User || model("User", UserSchema);

export default User;
