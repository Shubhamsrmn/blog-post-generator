import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    userId: {
      index: true,
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    markdown: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    keywords: {
      type: [String],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
    categories: {
      type: [String],
      default: [],
    },
    metaDescription: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
