const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const ticketMiddleware = async (req, res, next) => {
    const {
        params: { id },
    } = req;

    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
        return res.sendStatus(400);
    }

    const ticket = await prisma.ticket.findUnique({
        where: {
            id: parsedId,
        },
    });

    if (!ticket) {
        return res.status(404).json({ error: "ticket not found" });
    }

    req.eventId = parsedId;
    next();
};

module.exports = ticketMiddleware;
