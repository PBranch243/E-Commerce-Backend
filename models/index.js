// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category.  Categories have many Products
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'product_tags',
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'product_tags',
  foreignKey: 'tag_id'
});
//the following may not be necessary, but because
//we did so in the lesson just to be thorough, I will
//do so here as well
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
