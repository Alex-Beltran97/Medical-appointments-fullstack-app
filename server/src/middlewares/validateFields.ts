import { NextFunction, Request, Response } from "express";
import { validationResult } from 'express-validator';

const validateFields = (req: Request, res: Response, next: NextFunction)=>{
  const err = validationResult(req);

  if(!err.isEmpty()) return res.status(400).json(err);

  next();

};

export default validateFields;