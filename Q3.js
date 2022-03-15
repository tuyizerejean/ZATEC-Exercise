const countries = [ 'Portugal', 'France', 'Egypt', 'Ethiopia', 'Canada', 'England'];
const searchTerm = 'France';
const francIndex = countries.indexOf(searchTerm);
console.log("Index of France element is:",francIndex)
const deleteIndex=countries.splice(1,francIndex)
console.log("Elements of the array after removing France:" ,countries)
//-------Failed to work on this sub question----------
let eCountries = []
// for(i=0;i< eCountries.length;i++)
// {
//     const addItem='England';
// if(addItem.toString().StartWith('E'))
// {
//     eCountries.unshift(addItem);
// }
// console.log(eCountries[i])
// }

