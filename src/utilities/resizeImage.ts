import path from 'path'
import sharp from 'sharp'

export const resizeImage = async (
  file: string,
  width: number,
  height: number
): Promise<string | undefined> => {
  try {
    const uploadImage: string = path.join(
      __dirname,
      '../../full',
      file + '.jpg'
    )
    const outputImage: string = path.join(
      __dirname,
      '../../thumb',
      file + '_' + width + '_' + height + '.jpg'
    )
    await sharp(uploadImage)
      .resize(Number(width), Number(height))
      .toFile(outputImage)
    return outputImage
  } catch (err) {
    console.log(err)
  }
}
