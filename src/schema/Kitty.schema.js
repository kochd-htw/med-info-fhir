const mongoose = require('mongoose')

const kittySchema = new mongoose.Schema({
  name: String,
  age: Number,
  isCool: Boolean,
  favouriteTreats: Array,
  bestToy: {
    name: String,
    color: String
  },
  toys: [{
    name: String,
    color: String
  }]
})

export default mongoose.model('Kitty', kittySchema)
