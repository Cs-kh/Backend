const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomName: {
    type: String,
    required: true,
  },
  roomPrice: {
    type: Number,
    required: true,
  },
  roomDescription: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  coordinate: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  rating: {
    type: Number,
    required: true,
  },

  rooms: [roomSchema],
});

module.exports = mongoose.model("Hotel", hotelSchema);
