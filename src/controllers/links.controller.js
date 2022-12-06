import { pool } from "../database.js";

export const renderLinks = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM elementos");
  res.render("links/elements", { element: rows });
};



export const renderAddLink = (req, res) => {
  res.render("links/add");
};

export const addLink = async (req, res) => {
  const { nombre, lote, cantidad, serie, nominacion, estado, marca } = req.body;
  const newLink = {
    nombre,
    lote,
    cantidad,
    serie,
    nominacion,
    estado,
    marca
  };
  await pool.query("INSERT INTO elementos set ?", [newLink]);
  req.flash("success", "Element Successfully");
  res.redirect("/links");
};


export const deleteLink = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM elementos WHERE ID = ?", [id]);
  req.flash("success", "Element Removed Successfully");
  res.redirect("/links");
};

export const renderEditLink = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query("SELECT * FROM elementos WHERE id = ?", [id]);
  res.render("links/edit", { element: rows[0] });
};

export const editLink = async (req, res) => {
  const { id } = req.params;
  const { nombre, lote, cantidad, serie, nominacion, estado, marca } = req.body;
  const newLink = {
    nombre,
    lote,
    cantidad,
    serie,
    nominacion,
    estado,
    marca
  };
  await pool.query("UPDATE elementos set ? WHERE id = ?", [newLink , id]);
  req.flash("success", "Element Updated Successfully");
  res.redirect("/links");
};