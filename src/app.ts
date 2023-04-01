import express from "express";
import session from "express-session";
import passport from "passport";
import authRouter from "./routes/auth";
import protectedRouter from "./routes/protected";
import "./middlewares/passport";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", protectedRouter);
app.use("/auth", authRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
