import { App } from './app'

const PORT = process.env.PORT || 3001
const app = new App()

app.express.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})