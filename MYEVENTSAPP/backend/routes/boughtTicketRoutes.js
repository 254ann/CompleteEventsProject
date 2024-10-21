const express = require("express");
const { checkSchema } = require("express-validator");
const authMiddleware = require("../midlewares/authMiddleware");
const BoughtTicketSchema = require("../schemas/boughtTicketsSchemas");

const {
    createBoughtTicket,
    filterBoughtTicketsByUserId,
} = require("../controllers/ticketController");

const router = express.Router();

router
    .route("/boughtTickets/:userId")
    .get(authMiddleware, filterBoughtTicketsByUserId);

router
    .route("/boughtTickets")
    .post(checkSchema(BoughtTicketSchema), authMiddleware, createBoughtTicket);

module.exports = router;
