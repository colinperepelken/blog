import express from 'express'
import { apiRouter } from './routes/apiRouter'

class App {
  public express : express.Application

  constructor () {
    this.express = express()
    this.config()
  }

	private config () : void {
  	// Enable CORS
    this.express.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      next()
    })
    
    this.express.use('/', apiRouter)
  }
}

export { App }