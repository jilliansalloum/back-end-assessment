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
