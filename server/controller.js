module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "You will recieve a large inheritance",
      "You will fall into a man-hole.",
      "Beware of falling objects.",
    ];

    //choose random fortune
    let randomIndex2 = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex2];

    res.status(200).send(randomFortune);
  },
};
