import express from "express";
const router = express.Router();

import { convertPhonewordToWordController } from "../controllers/converter.controller";

router.get("/converter/:phoneword", convertPhonewordToWordController);

export default router;
