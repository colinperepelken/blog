import express from 'express'
import { Logger } from './logging/Logger'
import { apiRouter } from './routes/apiRouter'

class App {
  public express: express.Application

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
    
    this.express.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      Logger.logIncomingRequest(`${req.method} ${req.path}`)
      next()
    })
    this.express.use('/', apiRouter)
    this.express.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.error(err)
      res.status(err.status || 500);
      res.send(err);
    })
  }
}

export { App }