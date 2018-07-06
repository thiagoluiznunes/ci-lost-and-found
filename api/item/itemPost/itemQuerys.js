import Item from './item';

const getAll = (req, res) => {
  const skip = parseInt(req.params.skip, 10);
  const limit = parseInt(req.params.limit, 10);

  Item
    .find({}, (err, items) => {
      if (err) {
        return { errors: ['Falha ao recuperar dados de postagens.'] };
      }
      return res.json(items);
    })
    .skip(skip)
    .limit(limit);
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
