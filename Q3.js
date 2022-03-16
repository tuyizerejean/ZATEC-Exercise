const countries = [ 'Portugal', 'France', 'Egypt', 'Ethiopia', 'Canada', 'England'];
const searchTerm = 'France';
const francIndex = countries.indexOf(searchTerm);
console.log("Index of France element is:",francIndex)
const deleteIndex=countries.splice(1,francIndex)
console.log("Elements of the array after removing France:" ,countries)
// Working on the array to accept countries that start with 'E'
console.log("---Working on the array to accept countries that start with 'E'-----")
let eCountries = []
countries.forEach((item) => {
  	if(item.startsWith('E')){
      eCountries.push(item)
    }
})
eCountries.forEach((item, index) => {
  	console.log(`Index[${index}]: ${item} `)
})


