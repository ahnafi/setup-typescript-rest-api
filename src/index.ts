import express, { type Application, type NextFunction, type Request, type Response } from 'express'

const app: Application = express()
const port: number = 3000

// routes
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'hello world' })
})

app.listen(port, () => {
  console.log('express listen at port', port)
})
