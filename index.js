import express from 'express'
import { dbConnection } from './dataBase/dbConnection.js'
import userRouter from './src/modules/users/user.router.js'
import azkarRouter from './src/modules/azkar/azkar.router.js'
import cors from 'cors'
const app = express()
const port = 3000



app.use(cors())
app.use(express.json())
app.use('/users',userRouter)
app.use('/azkar',azkarRouter)


dbConnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))