import { Schema, models, model } from "mongoose";

const HeaderDataSchema = new Schema(
  {
    fullName: { type: String, default: null },
    age: { type: String, default: null },
    location: { type: String, default: null },
    sex: { type: String, enum: ["Male", "Female"], default: null },
  },
  { _id: false },
);

const SavedAnalysisSchema = new Schema(
  {
    analysisId: { type: String, required: true },
    name: { type: String, required: true },
  },
  { _id: false },
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
