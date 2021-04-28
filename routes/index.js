const express = require("express")
const router = express.Router()

const userRouter = require("./userRouter")
const sendMailControllerClient = require("../controllers/sendMailController")
const sendMailDonationController = require("../controllers/sendMailDonationController")
const sendMailControllerTecho = require("../controllers/sendMailControllerTecho")

router.use("/user", userRouter)
router.post("/send-mail-client", sendMailControllerClient.send)
router.post("/send-mail-techo", sendMailControllerTecho.send)
router.post("/send-mail-donation", sendMailDonationController.send)

module.exports = router