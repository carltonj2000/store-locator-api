const express = require("express");

const { getStores, addStores } = require("../controllers/stores.js");

const router = express.Router();

router.route("/").get(getStores);
router.route("/").post(addStores);

module.exports = router;
