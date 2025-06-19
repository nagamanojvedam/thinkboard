import express from "express";
import {
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
  createNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.route("/").get(getAllNotes).post(createNote);
router.route("/:id").get(getNoteById).put(updateNote).delete(deleteNote);

export default router;
