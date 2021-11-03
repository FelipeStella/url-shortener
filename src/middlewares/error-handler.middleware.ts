import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { DatabaseError } from 'src/models/errors'

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof DatabaseError) {
    res.sendStatus(StatusCodes.BAD_REQUEST)
  } else {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}
