////logica de negocio
const { DATA_BASE } = require("../models/base");
const getAllData = () => {
  return DATA_BASE;
};

module.exports = { getAllData };
