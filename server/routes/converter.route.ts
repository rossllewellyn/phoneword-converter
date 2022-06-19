import express from "express";
const router = express.Router();

// Controller
import { convertPhonewordToWordController } from "../controllers/converter.controller";

/**
 * @api {get} /api/
 * @apiName Convert Phoneword to Word
 *
 * @apiParam {String} [phoneword] Phoneword
 *
 * @apiSuccess (200) {Object} `ConvertedWord` string array
 */
router.get("/converter/:phoneword", convertPhonewordToWordController);

export default router;
