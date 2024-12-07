var express = require('express');
var router = express.Router();

const categoryList = [
  { id: '1', title: '카테고리1' },
  { id: '2', title: '카테고리2' },
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

  const category = {
    title: newCategory.title,
    id: `${(Number(categoryList[categoryList.length - 1]?.id) ?? -1) + 1}`,
  };

  categoryList.push(category);
  res.status(200).json(category);
});

router.put('/:categoryId', function (req, res, next) {
  const categoryId = req.params.categoryId;
  const category = categoryList.find((category) => category.id === categoryId);

  if (!category) {
    res.status(404).json({ message: 'Category not found' });
    return;
  }

  const newCategory = {
    id: categoryId,
    title: req.body.title,
  };

  categoryList[categoryList.indexOf(category)] = newCategory;
  res.status(200).json(newCategory);
});

router.delete('/:categoryId', function (req, res) {
  const categoryId = req.params.categoryId;
  const category = categoryList.find((category) => category.id === categoryId);

  if (!category) {
    res.status(404).json({ message: 'Category not found' });
    return;
  }

  categoryList.splice(categoryList.indexOf(category), 1);
  res.status(200).json({ id: category.id });
});

module.exports = router;
