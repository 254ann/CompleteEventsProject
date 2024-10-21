const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { matchedData, validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, password, email, isAdmin } = matchedData(req);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            username: username,
            email: email,
            isAdmin: isAdmin,
            password: hashedPassword,
        },
    });
    res.json(user);
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user.id }, JWT_SECRET, {
            expiresIn: "6hr",
        });
        res.json({ message: "Login successful", token, user: user });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "An error occurred during login" });
    }
};

exports.logout = (req, res) => {
    res.json({ message: "Logout successful" });
};

exports.getUser = async (req, res) => {
    const { id } = req.params;
    const userId = parseInt(id, 10);

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                events: true,
            },
        });
        res.status(200).json({
            status: "success",
            data: { users },
        });
    } catch (error) {
        console.error("error fetching users", error);
        res.status(500).json({
            status: "error",
            message: "failed to retrieve users",
        });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, email, isAdmin } = matchedData(req);

    if (!password) {
        return res.status(400).json({ error: "Password is required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.update({
            where: { id: parseInt(id) },
            data: { username, password: hashedPassword, email, isAdmin },
        });
        res.status(200).json(user);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
