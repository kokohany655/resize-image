import express, { Request, Response, Router } from 'express'
import { checkImage } from '../middleware/checkImage'
import { resizeImage } from '../utilities/resizeImage'

const imageProcess: Router = express.Router()

imageProcess.get('/', checkImage, async (req: Request, res: Response) => {
  const { width, height, filename } = req.query as unknown as {
    width: number
    height: number
    filename: string
  }
  const result = await resizeImage(filename, width, height)
  res.sendFile(result as string)
})

export default imageProcess
