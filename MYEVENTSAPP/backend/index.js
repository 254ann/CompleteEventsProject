const express = require("express");
const cors = require("cors");
const router = require("./routes/index");

require("dotenv").config(); // Load environment variables

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/api/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
