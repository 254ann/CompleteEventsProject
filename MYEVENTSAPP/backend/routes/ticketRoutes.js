const express = require("express");
const { checkSchema } = require("express-validator");
const {
    getAllTicket,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket,
    filterTicketsByEvent,
} = require("../controllers/ticketController");
const ticketSchema = require("../schemas/ticketSchemas");
const ticketMiddleware = require("../midlewares/ticketMiddleware");
const router = express.Router();
const authMiddleware = require("../midlewares/authMiddleware");

router.route("/tickets/:eventId").get(authMiddleware, filterTicketsByEvent);

router
    .route("/tickets")
    .get(authMiddleware, getAllTicket)
    .post(checkSchema(ticketSchema), authMiddleware, createTicket);

router
    .route("/tickets/:id")
    .get(authMiddleware, getTicketById)
    .put(checkSchema(ticketSchema), authMiddleware, updateTicket)
    .delete(authMiddleware, ticketMiddleware, deleteTicket);

module.exports = router;
