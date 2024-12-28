
require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  DB_URI: process.env.DB_URI,
  HMS_SECRET: process.env.HMS_SECRET,
  HMS_ACCESS_KEY: process.env.HMS_ACCESS_KEY,
};
