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
      "You will ace your test!",
      "You will see your dreams come true!",
      "Beware of Mondays!",
    ];

    //choose random fortune
    let randomIndex2 = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex2];

    res.status(200).send(randomFortune);
  },
  getEmpowered: (req, res) => {
    const empowered = [
      "You alone are enough you have nothing to prove to anybody!",
      "This is your moment, own it!",
      "If you're not making mistakes then you're not learning!",
      "You can do it!",
    ];

    let randomIndex3 = Math.floor(Math.random() * empowered.length);
    let randomEmpowered = empowered[randomIndex3];

    res.status(200).send(randomEmpowered);
  },
  getAdvice: (req, res) => {
    const advice = [
      "Just keep moving forward!",
      "It always seems impossible until it is done.",
      "Get rid of the negative so the positive can flow in.",
      "It doesn't get easier you just get stronger.",
      "if at first you don't succeed, try try again!",
      "The best view comes after the hardest climb!",
    ];

    //choose random fortune
    let randomIndex4 = Math.floor(Math.random() * advice.length);
    let randomAdvice = advice[randomIndex4];

    res.status(200).send(randomAdvice);
  },
  getFunFact: (req, res) => {
    const funfact = [
      "The firefox logo is a panda, not a fox!",
      "The first ever VCR was the size of a piano.",
      "The radio took 38 years to reach an audience of 50 million.",
      "The first computer mouse was made from wood.",
      "Spam mail was named after spam meat!",
      "There are over 35 million google searches a month.",
    ];

    //choose random fortune
    let randomIndex5 = Math.floor(Math.random() * funfact.length);
    let randomFunFact = funfact[randomIndex5];

    res.status(200).send(randomFunFact);
  },
};
