var express = require("express");
var router = express.Router();

const categoryList = [];

// todo: client에서 react-query + axios로 api 호출해보기
router.get("/categories", function (req, res, next) {
  res.json(categoryList);
});

router.get("/categories/:categoryId", function (req, res, next) {
  const categoryId = req.params.categoryId;
  const category = categoryList.find((category) => category.id === categoryId);

  if (!category) {
    res.status(404).json({ message: "Category not found" });
    return;
  }

  res.json(category);
});

router.post("/categories", function (req, res, next) {
  const newCategory = req.body;
  categoryList.push(newCategory);
  res.status(201).json(newCategory);
});

router.put("/categories/:categoryId", function (req, res, next) {
  const categoryId = req.params.categoryId;
  const category = categoryList.find((category) => category.id === categoryId);

  if (!category) {
    res.status(404).json({ message: "Category not found" });
    return;
  }

  const updatedCategory = req.body;
  categoryList[categoryList.indexOf(category)] = updatedCategory;

  res.json(updatedCategory);
});

router.delete("/categories/:categoryId", function (req, res, next) {
  const categoryId = req.params.categoryId;
  const category = categoryList.find((category) => category.id === categoryId);

  if (!category) {
    res.status(404).json({ message: "Category not found" });
    return;
  }

  categoryList.splice(categoryList.indexOf(category), 1);

  res.json(category);
});

module.exports = router;
