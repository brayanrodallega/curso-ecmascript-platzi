const regex = /\b(Apple)+\b/g;

const str = 'Apple Banana Apple Orange Apple Banana';

for (const match of str.matchAll(regex)) {
  console.log(match);
}
