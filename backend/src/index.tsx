import express, { Request, Response } from 'express'
import { sampleBooks } from './data'

const app = express()
app.get('/api/products', (req: Request, res: Response) => {
  res.json(sampleBooks)
})
const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})