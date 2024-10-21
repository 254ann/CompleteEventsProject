const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { validationResult } = require("express-validator");
exports.getAllTicket = async (req, res) => {
    try {
        const ticket = await prisma.ticket.findMany();
        res.status(200).json(ticket);
    } catch (error) {
        console.error("Error fetching ticket:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.filterTicketsByEvent = async (req, res) => {
    const { eventId } = req.params;
    console.log(req.params);
    try {
        const tickets = await prisma.ticket.findMany({
            where: { eventId: parseInt(eventId) },
        });
        if (tickets.length <= 0) {
            return res.status(404).json({ message: " No Ticket is found" });
        }
        res.status(200).json(tickets);
    } catch (error) {
        res.json({ message: "Internal Server Error", error });
    }
};

exports.getTicketById = async (req, res) => {
    const { id } = req.params;
    try {
        const ticket = await prisma.ticket.findUnique({
            where: { id: parseInt(id) },
        });
        if (!ticket) {
            return res.status(404).json({ message: "Ticket not found" });
        }
        res.status(200).json(ticket);
    } catch (error) {
        console.error("Error fetching ticket by id:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.createTicket = async (req, res) => {
    const { eventId, type, price, quantity } = req.body;
    try {
        const ticket = await prisma.ticket.create({
            data: {
                eventId,
                type,
                price,
                quantity,
            },
        });
        res.status(201).json(ticket);
    } catch (error) {
        console.error("Error creating ticket:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.updateTicket = async (req, res) => {
    const { id } = req.params;
    const { eventId, type, price, quantity } = req.body;
    try {
        const ticket = await prisma.ticket.update({
            where: { id: parseInt(id) },
            data: {
                eventId,
                type,
                price,
                quantity,
            },
        });
        res.status(200).json(ticket);
    } catch (error) {
        console.error("Error updating ticket:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.deleteTicket = async (req, res) => {
    const { ticketId } = req;
    await prisma.ticket.delete({
        where: { id: ticketId },
    });
    res.sendStatus(200);
};

exports.filterBoughtTicketsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const tickets = await prisma.boughtTicket.findMany({
            where: { userId: parseInt(userId) },
        });
        if (tickets.length <= 0) {
            return res
                .status(404)
                .json({ message: " No BoughtTicket is found" });
        }
        res.status(200).json(tickets);
    } catch (error) {
        res.json({ message: "Internal Server Error", error });
    }
};

exports.createBoughtTicket = async (req, res) => {
    const { eventId, type, price, event_title, userId } = req.body;
    try {
        const boughtTicket = await prisma.boughtTicket.create({
            data: {
                eventId,
                type,
                price,
                event_title,
                userId,
            },
        });
        res.status(201).json(boughtTicket);
    } catch (error) {
        console.error("Error creating bought Ticket:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
