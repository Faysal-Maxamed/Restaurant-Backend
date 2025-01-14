import  express  from "express";
import connectTodb from "./Configdb/databse.js";
import userRoutes from './routes/userRoutes.js'



const app = express()
connectTodb()

const port = 5000
app.use(express.json())
app.use('/api/users', userRoutes)

app.listen(port , ()=>{
    console.log(`Server is running on ${port}`)
})

app.get('/',(req,res)=>{
    res.send("kusoo dhawoow maqaayadeena hel cuno macan")
})