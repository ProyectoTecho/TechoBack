const express = require("express")
const router = express.Router()

const userRouter = require("./userRouter")
const sendMailController = require("../controllers/sendMailController")
const sendMailDonationController = require("../controllers/sendMailDonationController")

router.use("/user", userRouter)
router.post("/send-mail", sendMailController.send)
router.post("/send-mail-donation", sendMailDonationController.send)

module.exports = router