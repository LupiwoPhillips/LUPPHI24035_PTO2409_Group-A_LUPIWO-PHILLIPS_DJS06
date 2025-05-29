// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. **ForEach Basics** 

// log each name and each province to the console

provinces.forEach(provinces => console.log(provinces));
names.forEach(names => console.log(names));

// log each name with a matching province in the format "Name (Province)"

names.forEach((names, index) => 
  console.log(`${names} (${provinces[index]})`));

 // 2. **Uppercase Transformation**
 
 // Use `map` to create a new array of province names in all uppercase. Log the new array to the console.

 const upperCaseNames = provinces.map(province => province.toUpperCase());
console.log(upperCaseNames);

// 3. **Name Lengths**

//  Create a new array using `map` that contains the length of each name.

const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. **Sorting**

// Use `sort` to alphabetically sort the provinces.

const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// 5. **Filtering Cape**

// Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.

const filteredProvinces = provinces.filter(provinces => !provinces.includes("Cape"));
console.log(`Count of provinces not containing "Cape": ${filteredProvinces.length}`);

// 6. **Finding 'S'**

// Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.

const containsS = names.map(names => names.includes('S') || names.includes('s'));
console.log(containsS);


// 7. **Creating Object Mapping**

// Use `reduce` to transform the names array into an object mapping names to their respective provinces.

const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap);

// #### Advanced Exercises (Single `console.log` Execution) ####

// 1. **Log Products**

// Iterate over the products array, logging each product name.

products.forEach(product => console.log(product.product));

// 2. **Filter by Name Length**

// Filter out products with names longer than 5 characters.

console.log( products.filter( product => product.product.length >= 5));

// 3. **Price Manipulation**

// Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.

const totalPrice = products
  .filter(p => p.price) // Filter out products without prices
  .reduce((sum, p) => sum + Number(p.price), 0); // Convert prices and sum
  console.log(totalPrice);

// 4. **Concatenate Product Names**

// Use `reduce` to concatenate all product names into a single string.

const concatenatedProductNames = products
  .reduce((acc, p) => acc + p.product + ' ', ''); // Concatenate product names
console.log(concatenatedProductNames.trim()); // Trim to remove trailing space

// 5. **Find Extremes in Prices**

// Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."

const prices = products
  .filter(p => p.price) // Filter out products without prices
  .map(p => Number(p.price)); // Convert prices to numbers
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const highestLowestPrice = `Highest: ${highestPrice}. Lowest: ${lowestPrice}.`;
  console.log(highestLowestPrice);

// 6. **Object Transformation**

// Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.

const transformedProducts = products.reduce((acc, p) => {
  acc.push({ name: p.product, cost: Number(p.price) || 0 }); // Convert price to number or use 0 if empty
  return acc;
}, []);
console.log(transformedProducts);







