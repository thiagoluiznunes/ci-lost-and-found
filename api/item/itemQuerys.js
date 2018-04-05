const Item = require('./item');

const searchByName = (req, res) => {
  const urlParameter = req.params.name;
  // Find the objet by name
  Item.find({ 'name': urlParameter }, (err, item) => {
    if (err) res.json(err);
    else res.json(item);
  });
};

export default { searchByName };

