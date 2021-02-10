const { Router } = require('express');
const { champion_get, champion_post } = require("../controllers/userControllers")

const router = Router();

router.get("/champion", champion_get);
router.post("/champion", champion_post);

module.exports = router;