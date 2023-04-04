const { string } = require("i/lib/util");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please add your name"],
    },
    Phone: {
      type: Number,
      required: [true, "Please add your phone"],
    },
    childName: {
      type: String,
      required: [true, "Please add your child s name name"],
    },
    childSex: {
      type: String,
      required: [true, "Please add your child sex"],
    },
    email: {
      type: String,
      required: [true, "Please add your email"],
    },
    passeword: {
      type: String,
      required: [true, "Please add your passeword"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
