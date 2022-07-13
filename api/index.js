const router = require("express").Router();

const bases = [
  "USD",
  "EUR",
  "CHF",
  "HRK",
  "MXN",
  "ZAR",
  "CNY",
  "THB",
  "AUD",
  "ILS",
  "KRW",
  "BTC",
  "JPY",
  "PLN",
  "GBP",
  "IDR",
  "HUF",
  "PHP",
  "TRY",
  "RUB",
  "HKD",
  "ISK",
  "DKK",
  "ADA",
  "CAD",
  "MYR",
  "BGN",
  "NOK",
  "RON",
  "SGD",
  "CZK",
  "SEK",
  "NZD",
  "BRL",
  "INR",
  "BYN",
];

// Get current timesatamp in seconds
const currentTime = () => {
  return ~~(Date.now() / 1000);
};

const randomRate = () => {
  return Math.random();
};

const currencyByBase = (base) => {
  return {
    date: currentTime(),
    rate: randomRate(),
    base: base,
  };
};

router.get("/currency/:base", (req, res) => {
  try {
    const base = req.params.base;
    const isInBases = bases.includes(base);
    if (isInBases) {
      return res.status(200).json(currencyByBase(base));
    } else {
      throw new Error(
        `Current base (${base}) does not exist! Please, use available currency bases.`
      );
    }
  } catch {
    return res.status(500).send(error);
  }
});

router.get("/currency", (req, res) => {
  try {
    const allCurrencies = bases.map((item) => currencyByBase(item));
    return res.status(200).json(allCurrencies);
  } catch {
    return res.status(500).send(error);
  }
});

module.exports = router;
