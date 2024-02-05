const router = require("express").Router();
const { Trip } = require("../../models");

// CREATE a trip
router.post("/", async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body);
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE a trip
router.delete("/:id", async (req, res) => {
  try {
    const removeTrip = await Trip.destroy({
      where: {
        id: req.params.id,
      }
    })
    res.status(200).json(removeTrip)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
