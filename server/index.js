const express = require("express");
const cors = require("cors");

const { getCompliment} = require('./controller')
const { getFortune } = require('./controller')
const { getEmpowered } = require('./controller')
const { getAdvice } = require('./controller')
const { getFunFact } = require('./controller')



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
    .get("/api/empowered", getEmpowered)
    .get("/api/advice", getAdvice)
    .get("/api/funfact", getFunFact)
    .listen(4000, () => console.log("Server running on 4000"));




    // function submitHandler(e) {
    //     e.preventDefault()
    
    //     let firstname = document.querySelector('.firstName')
    //     let lastname = document.querySelector('.lastName')
    
    //     let bodyObj = {
    //         firstName: firstname.value,
    //         lastname: lastname.value, 
    //     }
    
    //     createFriend(bodyObj)
    
    //     firstname.value = ''
    //     lastname.value = ''
    // }