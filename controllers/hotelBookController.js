const HotelBook = require("../models/HotelBook");
const getHotelBook = async (req, res) => {
  const hotelBook = await HotelBook.find({});
  res.json({
    hotelBook: hotelBook.map((hotelBook) =>
      hotelBook.toObject({ getters: true })
    ),
  });
};

const hotelBook = async (req, res) => {
  const { id } = req.params;
  const {
    roomId,
    roomName,
    roomPrice,
    roomDescription,
    roomType,
    image,
    userEmail,
  } = req.body;

  try {
    const book = await HotelBook.create({
      HotelId: id,
      roomId,
      roomName,
      roomPrice,
      roomDescription,
      roomType,
      image,
      userEmail,
    });
    res.json({ hotelBook: book });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const deleteHotelBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await HotelBook.findByIdAndDelete(id);
    res.json({ meesage: "Delete Room " });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getHotelBook = getHotelBook;
exports.hotelBook = hotelBook;
exports.deleteHotelBook = deleteHotelBook;
