var express = require('express');
var router = express.Router();

const categoryList = [
  { id: '1', name: '카테고리1' },
  { id: '2', name: '카테고리2' },
];

router.get('/', function (req, res, next) {
  res.json(categoryList);
});

router.get('/:categoryId', function (req, res, next) {
  const categoryId = req.params.categoryId;
  const category = categoryList.find((category) => category.id === categoryId);

  if (!category) {
    res.status(404).json({ message: 'Category not found' });
    return;
  }

  res.json(category);
});

router.post('/', function (req, res, next) {
  const newCategory = req.body;
  categoryList.push(newCategory);
  res.status(201).json(newCategory);
});

router.put('/:categoryId', function (req, res, next) {
  const categoryId = req.params.categoryId;
  const category = categoryList.find((category) => category.id === categoryId);

  if (!category) {
    res.status(404).json({ message: 'Category not found' });
    return;
  }

  const updatedCategory = req.body;
  categoryList[categoryList.indexOf(category)] = updatedCategory;

  res.json(updatedCategory);
});

router.delete('/:categoryId', function (req, res, next) {
  const categoryId = req.params.categoryId;
  const category = categoryList.find((category) => category.id === categoryId);

  if (!category) {
    res.status(404).json({ message: 'Category not found' });
    return;
  }

  categoryList.splice(categoryList.indexOf(category), 1);

  res.json(category);
});

module.exports = router;
