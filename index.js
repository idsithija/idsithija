const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json());

const db = require('./models');


//Routers
const userRouter = require('./routes/Users');
app.use("/auth", userRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('running');
    });
});