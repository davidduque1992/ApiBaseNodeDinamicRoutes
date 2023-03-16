//captura las peticiones , las maneja y las resuelve // basicamente recibe los parametos , lueog lo envia a un servicio que si hace logica de negocio y procesa los datos y se los retorna a este controlador
const { getAllData } = require("../services/base");
const getList = (req, res) => {
  res.send({ data: getAllData() });
};

const getDetail = (req, res) => {
  res.send({ data: "Detalle" });
};

const updateItem = (req, res) => {
  res.send({ data: "Actualizando" });
};

const createItem = (req, res) => {
  res.send({ data: "Creando" });
};

const deleteItem = (req, res) => {
  res.send({ data: "Eliminando" });
};

module.exports = { getDetail, getList, updateItem, createItem, deleteItem };
