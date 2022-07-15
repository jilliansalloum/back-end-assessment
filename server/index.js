const express = require("express");
const cors = require("cors");

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.get("/api/compliment", getCompliment);
// app.get("/api/fortune", getFortune);
// app.listen(4000, () => console.log("Server running on 4000"));

express()
    .use(cors())
    .use(express.json())
    .get("/api/compliment", getCompliment)
    .get("/api/fortune", getFortune)
    .listen(4000, () => console.log("Server running on 4000"));




