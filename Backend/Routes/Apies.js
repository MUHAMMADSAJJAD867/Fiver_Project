import express from "express";
import { registerUser } from "../Controller/ApiesController.js";

export const Apies = express.Router();

Apies.post("/registerUser", registerUser);
