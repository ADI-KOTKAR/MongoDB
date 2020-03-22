db.products.insertMany([
  { "_id" : 1, "name" : "abc", "price" : NumberDecimal("10")},
  { "_id" : 2, "name" : "jkl", "price" : NumberDecimal("20")},
  { "_id" : 3, "name" : "xyz", "price" : NumberDecimal("5")},
  { "_id" : 4, "name" : "xyz", "price" : NumberDecimal("5")},
  { "_id" : 5, "name" : "abc", "price" : NumberDecimal("10")},
  { "_id" : 6, "name" : "def", "price" : NumberDecimal("7.5")},
  { "_id" : 7, "name" : "def", "price" : NumberDecimal("7.5")},
  { "_id" : 8, "name" : "abc", "price" : NumberDecimal("10")}
])