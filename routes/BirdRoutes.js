const express = require("express");
const {
    getallbirds,
    addbird,
    getbird
} = require("../controllers/BirdController");

const router = express.Router();

router.get("/getallbirds", getallbirds);
router.get("/getbird/:id", getbird);
router.get("/", async (req, res) => {
    res.status(200).json({ "message": "Hello Birds" })
});

router.post("/addbird", addbird);

// router.get("/current", validateToken, currentUser);
// 
module.exports = router;