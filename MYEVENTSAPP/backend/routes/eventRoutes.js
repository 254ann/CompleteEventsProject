const express = require("express");
const { checkSchema } = require("express-validator");
const fetchEventByIdMiddleware = require("../midlewares/eventsMiddleware");
const {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteuserController,
} = require("../controllers/eventController");
const EventSchema = require("../schemas/eventSchemas");
const authMiddleware = require("../midlewares/authMiddleware");

const router = express.Router();

router
    .route("/events")
    .get(authMiddleware, getAllEvents)
    .post(checkSchema(EventSchema), authMiddleware, createEvent);

router
    .route("/events/:id")
    .get(authMiddleware, getEventById)
    .put(checkSchema(EventSchema), authMiddleware, updateEvent)
    .delete(authMiddleware, fetchEventByIdMiddleware, deleteuserController);

module.exports = router;
