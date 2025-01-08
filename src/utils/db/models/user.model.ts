import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      index: true,
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    token: {
      type: Number,
      required: true,
      default: 10,
      min: 0,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.models?.User || mongoose.model("User", UserSchema);
export default UserModel;
