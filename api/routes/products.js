const express = require("express");

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products"
  });
});

router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name
  };
  console.log(req.body);
  res.status(201).json({
    message: "Handling POST requests to /products",
    id: 1,
    name: req.body.name,
    createdProduct: product
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;

  if(id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id: id
    })
  }
  else {
    res.status(200).json({
      message: `You entered the following ID: ${id}`
    })
  }
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: "Updated product"
  })
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: "Deleted product"
  })
});


module.exports = router;