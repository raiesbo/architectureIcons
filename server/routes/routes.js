const { Router } = require('express');
const { champion_get, champion_post } = require("../controllers/userControllers")
const { question_post } = require("../controllers/questionControllers");
const { email_post } = require("../controllers/emailConstrollers")

const router = Router();

router.get("/champion", champion_get);
router.post("/champion", champion_post);

router.post("/question", question_post);

router.post("/email", email_post);

module.exports = router;
