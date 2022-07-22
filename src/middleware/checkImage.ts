import { Request, Response, NextFunction } from 'express'
import path from 'path'
import fs from 'fs'

export function checkImage(
  req: Request,
  res: Response,
  next: NextFunction
): void | Response {
  const { width, height, filename } = req.query as unknown as {
    width: number
    height: number
    filename: string
  }
  if (!filename) return res.status(400).send('filename is required')
  if (width <= 0)return res.status(400).send('width must be greater than 0')
  if (height <= 0)return res.status(400).send('height must be greater than 0')
  if (isNaN(Number(width)) || isNaN(Number(height)))
    return res.status(400).send('width and height is required must be a number')
  const uploadImage: string = path.join(
    __dirname,
    '../../full',
    filename + '.jpg'
  )
  if (uploadImage.indexOf('.jpg') === -1)
    return res.status(400).send('file must be a jpg')
  if (!fs.existsSync(uploadImage)) return res.status(404).send('Not found')
  const outputImage: string = path.join(
    __dirname,
    '../../thumb',
    filename + '_' + width + '_' + height + '.jpg'
  )
  if (fs.existsSync(outputImage)) return res.sendFile(outputImage)
  next()
}
