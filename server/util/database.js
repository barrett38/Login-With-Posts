require("dotenv").config();
const CONNECTION_STRING = "INSERT YOUR CONNECTION STRING HERE";
console.log("CONNECTION_STRING:", CONNECTION_STRING);
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  // dialectOptions: {
  //     ssl: {
  //         require: true,
  //         rejectUnauthorized: false
  //     }
  // }
});

module.exports = {
  sequelize,
};
