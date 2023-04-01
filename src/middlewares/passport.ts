import passport from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../config/config";

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Add your own logic to save or update the user in the database
                const user = { email: profile.emails[0].value };
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);
