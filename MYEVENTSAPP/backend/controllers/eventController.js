const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { validationResult } = require("express-validator");
exports.getAllEvents = async (req, res) => {
    try {
        const events = await prisma.event.findMany();
        res.status(200).json(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getEventById = async (req, res) => {
    const { id } = req.params;

    try {
        const event = await prisma.event.findUnique({
            where: { id: parseInt(id) },
        });
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json(event);
    } catch (error) {
        console.error("Error fetching event by id:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.createEvent = async (req, res) => {
    const { title, imageUrl, description, date, location, userId } = req.body;

    try {
        const event = await prisma.event.create({
            data: {
                title,
                imageUrl,
                description,
                date: new Date(date),
                location,
                userId,
            },
        });
        res.status(201).json(event);
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.updateEvent = async (req, res) => {
    const { id } = req.params;
    const { title, imageUrl, description, date, location } = req.body;

    try {
        const event = await prisma.event.update({
            where: { id: parseInt(id) },
            data: {
                title,
                imageUrl,
                description,
                date,
                location,
            },
        });
        res.status(200).json(event);
    } catch (error) {
        console.error("Error updating event:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.deleteuserController = async (req, res) => {
    const { eventId } = req;
    // console.log(eventId);

    const deletedEvent = await prisma.event.delete({
        where: { id: eventId },
    });

    res.sendStatus(200);
};
