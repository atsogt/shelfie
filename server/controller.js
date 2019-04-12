const getProduct = (req, res) => {
  let db = req.app.get("db");
  db.read_products().then(results => {
    res.json(results);
  });
};
const postProduct = (req, res) => {
  req.app
    .get("db")
    .get_create_product([req.body.name, req.body.price, req.body.img_url])
    .then(results => {
      res.status(200).json(results); //status code
    });
};

const updateProduct = (req, res) => {
  req.app
    .get("db")
    .update_product([req.params.id, req.body.price])
    .then(results => {
      res.json(results);
    });
};

const removeProduct = (req, res) => {
  req.app
    .get("db")
    .delete_product(req.params.id) //params
    .then(results => {
      res.jason(results);
    });
};

module.exports = {
  getProduct,
  postProduct,
  updateProduct,
  removeProduct
};
