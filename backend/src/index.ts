import express, { Request, Response } from 'express'
   import { sampleProducts } from './data'
   import cors from 'cors'

   const app = express()
   app.use(
    cors({
      credentials:true,
      origin:['http://localhost:5173'],
    })
   )
   // address   2nd part  fuction that accept req and res 
   app.get('/api/products', (req: Request, res: Response) => {
     res.json(sampleProducts)  // rest.JSOn
   })
   const PORT = 4000
   app.listen(PORT, () => {
     console.log(`server started at http://localhost:${PORT}`)
   })