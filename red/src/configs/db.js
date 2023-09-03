const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(`mongodb+srv://${env.SECRET_KEY}cluster0.wmplk.mongodb.net/redis?retryWrites=true&w=majority`);
};

module.exports= connect;