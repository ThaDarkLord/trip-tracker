const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
    try {
        const location = await Location.findAll({
        //   include: [{ model: Traveller, through: Trip }],
        });
        res.status(200).json(location);
      } catch (error) {
        res.status(500).json(error);
      }
  
});

// GET a single location
router.get('/:id', async (req, res) => {
    try {
        const location = await Location.findPk(req.params.id, {
          include: [{ model: Traveller, through: Trip }],
        });
        res.status(200).json(location);
      } catch (error) {
        res.status(500).json(error);
      }

});

// CREATE a location
router.post('/', async (req, res) => {
    try {
        const location = await Location.create(req.body)
        res.statys(200).json(location)
    } catch (error) {
        res.status(500).json(error)
    }

});

// DELETE a location
router.delete('/:id', async (req, res) => {
    try {
        const deletedLocation = await Location.destroy({
            where: {id: req.params.id}
        })
        res.status(200).json(deletedLocation)
    } catch (error) {
        res.status(500).json(error)
    }
  
});

module.exports = router;
