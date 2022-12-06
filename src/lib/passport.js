import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";


import { pool } from "../database.js";
import * as helpers from "./helpers.js";

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const [rows] = await pool.query(
        "SELECT * FROM usuarios WHERE username = ?",
        [username]
      );

      if (!rows.length) return done(null, false, req.flash("error", "No user found"));

      const user = rows[0];
      
      if (!password == user.password) return done(null, false, req.flash("error", "Incorrect Password"));

      done(null, user, req.flash("success", "Welcome " + user.username));
    }
  )
);




// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [id]);
//   done(null, rows[0]);
// });