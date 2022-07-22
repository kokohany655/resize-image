import express, { Application } from 'express'
import imageProcess from './routes/imageProcess'

const app: Application = express()
const port = 8000

app.use('/api/image', imageProcess)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

export default app
