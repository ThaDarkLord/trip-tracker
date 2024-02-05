const router = require("express").Router();
const { Traveller, Trip, Location } = require("../../models");

// GET all travellers
router.get("/", async (req, res) => {
  try {
    const travellers = await Traveller.findAll({
      include: [{ model: Location, through: Trip }],
    });
    res.status(200).json(travellers);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET a single traveller
router.get("/:id", async (req, res) => {
  try {
    const traveller = await Traveller.findPk(req.params.id, {
      include: [{ model: Location, through: Trip }],
    });
    res.status(200).json(traveller);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE a traveller
router.post("/", async (req, res) => {});
try {
    const traveller = await Traveller.create(req.body)
    res.statys(200).json(traveller)
} catch (error) {
    res.status(500).json(error)
}
// DELETE a traveller
router.delete("/:id", async (req, res) => {});
try {
    const deletedTraveller = await Traveller.destroy({
        where: {id: req.params.id}
    })
    res.status(200).json(deletedTraveller)
} catch (error) {
    res.status(500).json(error)
}
module.exports = router;
