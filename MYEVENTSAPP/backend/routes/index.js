const { Router } = require("express");
const userrouter = require("./authRoutes");
const eventsrouter = require("./eventRoutes");
const ticketrouter = require("./ticketRoutes");
const boughtTicket = require("./boughtTicketRoutes");

const router = Router();
router.use(userrouter);
router.use(eventsrouter);
router.use(ticketrouter);
router.use(boughtTicket);

module.exports = router;
