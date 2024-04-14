import express from 'express';
import protectRoute from '../middleware/protectRoute.js'
import {applyLoanUsingReferral} from "../controllers/loan.controller.js"

const router = express.Router();

router.post('/apply', protectRoute, applyLoanUsingReferral)

export default router;