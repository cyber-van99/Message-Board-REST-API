const dbAccess = require("../services/service.dataAccess");

async function getList(req, res) {
  try {
    const data = await dbAccess.getItems();
    if (!data.length == 0) {
      res.status(200).send(data);
    } else {
      res.status(200).json({
        message: "No data found",
      });
    }
  } catch (error) {
    console.log(error);
    res.json(error);
    return;
  }
}

async function addItems(req, res) {
  try {
    const result = await dbAccess.addItem(req.body);
    if(!result){
      res.json({
        message: "Record already exists"
      }).end()
    }
    res.status(201).json(result);
  } catch (error) {
    res.json(error);
    return;
  }
}
async function updateItems(req, res) {
  try {
    const result = await dbAccess.updateItem(req.body);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(200).json({
        message: "No record found with given name",
      });
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

async function deleteItem(req, res) {
  try {
    const result = await dbAccess.deleteItem(req.body);
    if (result) {
      res.status(200).json({
        message:"Successful"
      });
    } else {
      res.status(200).json({
        message: "No record found with given name",
      });
    }
  } catch (error) {}
}

module.exports = { getList, addItems, updateItems, deleteItem };
