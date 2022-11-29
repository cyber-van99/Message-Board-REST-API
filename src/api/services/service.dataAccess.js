const listModel = require("../../database/schema.list");

async function getItems() {
  try {
    const data = await listModel.find({ display: true }, { _id: 0, __v: 0 });
    return data;
  } catch (error) {}
}

async function addItem(body) {
  try {
    const check = await listModel.find({ name: body.name });
    if (check.length > 0) {
      return;
    }
    const item = new listModel({
      name: body.name,
      notes: body.notes,
    });
    const result = await item.save();
    return result;
  } catch (error) {
    return error;
  }
}

async function updateItem(body) {
  try {
    const data = await listModel.findOneAndUpdate(
      { name: body.name },
      { notes: body.notes },
      { new: true }
    );
    return data;
  } catch (error) {}
}

async function deleteItem(body) {
  try {
    const data = await listModel.deleteMany({ name: body.name });
    if (data.modifiedCount > 0) {
      return data;
    } else {
      return ;
    }
  } catch (error) {}
}

module.exports = {
  addItem,
  getItems,
  updateItem,
  deleteItem,
};
