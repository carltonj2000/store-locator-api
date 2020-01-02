const Store = require("../models/Store");

// @desc Get all stores
// @route GET /api/v1/stores
// @access Public

exports.getStores = async (req, res, next) => {
  try {
    const stores = await Store.find();
    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "server error" });
  }
};

// @desc create a stores
// @route POST /api/v1/stores
// @access Public

exports.addStores = async (req, res, next) => {
  try {
    const store = await Store.create(req.body);
    return res.status(200).json({ success: true, data: store });
  } catch (err) {
    return res.status(500).json({ success: false, msg: err });
  }
};
