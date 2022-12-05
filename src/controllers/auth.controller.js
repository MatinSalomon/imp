import passport from "passport";
// import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const renderSignUp = (req, res) => {
  res.render("auth/signup");
};

export const signUp = async (req, res, next) => {
  const {username, password, email, admin } = req.body;

  const newUser = {
    username,
    email,
    password,
    admin
  };

  // newUser.password = await encryptPassword(password);

  // Saving in the Database
  const [result] = await pool.query("INSERT INTO usuarios SET ? ", [newUser]);
  newUser.id = result.insertId;

  req.login(newUser, (err) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/profile");
  });
}


export const renderSignIn = (req, res, next) => {
  res.render("auth/signin");
};

export const signIn = passport.authenticate("local.signin", {
  successRedirect: "/profile",
  failureRedirect: "/signin",
  failureMessage: true,
  failureFlash: true,
});

export const logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
};