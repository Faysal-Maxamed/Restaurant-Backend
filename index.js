import express from "express";
import connectTodb from "./Configdb/databse.js";
import userRoutes from './routes/userRoutes.js';
import foodProductRoute from "./routes/foodproductsRoutes.js";
import fruitProductRoute from "./routes/fruitProductRoutes.js"

const app = express();
connectTodb();

const port = 5000;
const host = '192.168.18.8';
app.use(express.json())
app.use('/api/users', userRoutes);
app.use('/api/foodproduct',foodProductRoute);
app.use('/api/fruitproduct',fruitProductRoute)

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});

app.get('/', (req, res) => {
    res.send("kusoo dhawoow maqaayadeena hel cuno macan");
});
