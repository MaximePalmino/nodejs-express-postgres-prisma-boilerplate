import express from "express";
import isAuthenticated from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Home Page");
});

router.get("/profile", isAuthenticated, (req, res) => {
    res.send(`Welcome, ${req.user.email}!`);
});

export default router;

