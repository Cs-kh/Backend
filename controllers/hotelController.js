const fs = require("fs");
const Hotel = require("../models/Hotel");

const getHotel = async (req, res) => {
  const hotel = await Hotel.find({});
  res.json({ hotels: hotel.map((place) => place.toObject({ getters: true })) });
};

const addHotel = async (req, res) => {
  const {
    name,
    city,
    description,
    rating,
    location,
    rooms,
    coordinate,
    image,
  } = req.body;

  let newHotel;

  //   const coordinate = {
  //     lat: req.body.lat,
  //     lng: req.body.lng,
  //   };

  try {
    // if (newHotel.name === undefined || newHotel.city === undefined || newHotel.description === undefined || newHotel.rating === undefined || newHotel.price === undefined || newHotel.distance === undefined || newHotel.location === undefined ) {
    //   throw new Error("the fileds is required");
    // }else {
    newHotel = await Hotel.create({
      name,
      city,
      description,
      rating,
      location,
      rooms,
      coordinate,
      image,
    });

    res.json({ hotels: newHotel });
    // }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addRoom = async (req, res) => {
  const { id } = req.params;

  const hotel = await Hotel.findById(id);
  if (!hotel) {
    res.status(404).json({ message: "Hotel not found" });
    return;
  }
  const newRoom = {
    roomName: req.body.roomName,
    roomDescription: req.body.roomDescription,
    roomType: req.body.roomType,
    roomPrice: req.body.roomPrice,
    image: req.body.roomImage,
  };
  await Hotel.updateOne(
    {
      _id: id,
    },
    {
      $push: {
        rooms: newRoom,
      },
    }
  );

  res.json({ hotel });
};

const deleteHotel = async (req, res) => {
  const { id } = req.params;
  const hotel = await Hotel.findById(id);

  if (!hotel) {
    res.status(404).json({ message: "Hotel not found" });
    return;
  }
  const filePath = `./public/images/${hotel.image}`;
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(err);
    }
  });
  const index = await Hotel.findByIdAndDelete(id);
  if (index === -1) {
    throw new Error("Place not found");
  }

  res.json({ message: "Hotel deleted" });
  // res.json({ place: data });
};

const updateHotel = async (req, res) => {
  const { id } = req.params;
  const { name, city, description, location, rating, image } = req.body;

  try {
    const hotel = await Hotel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: name,
          city: city,
          description: description,
          location: location,
          rating: rating,
          image: image,
        },
      }
    );
    res.json(hotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getHotel = getHotel;
exports.addHotel = addHotel;
exports.deleteHotel = deleteHotel;
exports.updateHotel = updateHotel;
exports.addRoom = addRoom;
