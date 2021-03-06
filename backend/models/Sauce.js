const mongoose = require('mongoose');
require('mongoose-type-url');
const sanitize = require("mongo-sanitize-save");

const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: mongoose.SchemaTypes.Url, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] }
});

sanitize.sanitizeSchema(sauceSchema);
module.exports = mongoose.model('Sauce', sauceSchema);
