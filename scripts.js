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
