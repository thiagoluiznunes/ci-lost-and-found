import Item from './item';

const getAll = (req, res) => {
  Item.find({}, (err, items) => {
    if (err) {
      return { erros: ['Falha ao recuperar dados de postagens.'] };
    }
    return res.json(items);
  });
};

export default { getAll };
