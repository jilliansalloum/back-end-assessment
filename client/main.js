const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const complimentBtn = document
  .getElementById("complimentButton")
  .addEventListener("click", getCompliment);

const getFortune = () => {
//   console.log("hi");
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const fortuneBtn = document
  .getElementById("fortuneButton")
  .addEventListener("click", getFortune);


const getEmpowered = () => {
//   console.log("hi");
  axios.get("http://localhost:4000/api/empowered/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const empoweredBtn = document
  .getElementById("empoweredButton")
  .addEventListener("click", getEmpowered);

const getAdvice = () => {
  axios.get("http://localhost:4000/api/advice/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
  
const adviceBtn = document
  .getElementById("adviceButton")
  .addEventListener("click", getAdvice);

const getFunFact = () => {
  axios.get("http://localhost:4000/api/funfact/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
    
const funfactButton = document
  .getElementById("funfactButton")
  .addEventListener("click", getFunFact);