import Item from './item';

const getAll = (req, res) => {
  Item.find({}, (err, items) => {
    if (err) {
      return { errors: ['Falha ao recuperar dados de postagens.'] };
    }
    return res.json(items);
  });
};

const count = (req, res) => {
  Item.count((err, value) => {
    if (err) {
      res.status(500).json({ errors: [err] });
    } else {
      res.json({ value });
    }
  });
};

export default { getAll, count };
