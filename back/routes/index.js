const express = require("express")
const router = express.Router()

const userRouter = require("./userRouter")

const sendMailController = require("../controllers/sendMailController")

router.use("/user", userRouter)
router.post("/send-mail", sendMailController.send)



module.exports = router