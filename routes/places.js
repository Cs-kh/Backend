const express = require("express");

const {
  getHotel,
  addHotel,
  addRoom,
  deleteHotel,
  updateHotel,
} = require("../controllers/hotelController");
const {getHotelBook, hotelBook , deleteHotelBook} = require("../controllers/hotelBookController");
const routes = express.Router();

routes.get("/", getHotel);

routes.post("/add", addHotel);
routes.post("/add/:id", addRoom);
routes.delete("/:id", deleteHotel);

routes.put("/updatePlace/:id", updateHotel);
routes.get("/hotelBook", getHotelBook);
routes.post("/book/:id", hotelBook);
routes.delete("/book/:id", deleteHotelBook);
module.exports = routes;
