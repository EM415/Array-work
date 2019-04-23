const companies = [
//object literals
    {name: "Company One", category: "Finance" , start: 1981, end:2003},
    {name: "Company Two", category: "Retail" , start: 1992, end:2008},
    {name: "Company Three", category: "Auto" , start: 1999, end:2007},
    {name: "Company Four", category: "Retail" , start: 1989, end:2010},
    {name: "Company Five", category: "Techonology" , start: 2009, end:2014},
    {name: "Company Six", category: "Finance" , start: 1987, end:2010},
    {name: "Company Seven", category: "Auto" , start: 1981, end:2003},
    {name: "Company Eight", category: "Technology" , start: 2011, end:2016},
    {name: "Company Nine", category: "Retail" , start: 1981, end:1989}
];

// this array is its own constant
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// for loop
// for (var i = 0; i < companies.length; i++){
//   console.log (companies[i]);
// }

// for each
// companies.forEach(function(company){
//   console.log(company.name);
// })

//drinking age
  // let canDrink = []; //set ourvariable to an empty array
  // for ( i = 0; i < ages.length; i++){ //loops thorugh our array until it meets our condition
  //   if(ages[i] >= 21){ //checks to see if we meet the age requirement
  //     canDrink.push(ages[i]) // pushes our minimum ages into our array
  //   }
  // }
  // console.log (canDrink);

// const canDrink = ages.filter(function(age){
//   if (age >= 21){
//     return true;
//   }
// });
// console.log (canDrink);



// filter retail
// const retailCompanies = companies.filter(function(company){
//   if (company.category === "Retail"){
//     return true;
//   }
// })
// console.log(retailCompanies)


//ES6
// const retailCompanies = companies.filter(company => (company.category === "Retail"))
// console.log(retailCompanies);

// get 80s companies
// const eightysCompanies = companies.filter(company => (company.start >= 1980 && company.end < 1990));
// console.log (eightysCompanies);


//get 2000's companies
// const yeartwoc = companies.filter(company =>(company.start >= 2000))
// console.log(yeartwoc)


// get companies that lasted 10 years
// const tenYearCompanies = companies.filter(company => (company.end - company.start >= 10 ));
// console.log(tenYearCompanies)


// map -> we want an array of company names
// const companyNames = companies.map(function(company){
//   return company.name
// });
// console.log(companyNames);


// sort
// const sortedCompanies = companies.sort (function(company1, company2) {
//   if (company1.start > company2.start){
//     return 1;
//   }
//   else {
//     return -1;
//   }
// });
// console.log(sortedCompanies)


// reduce
const totalAges = (accumulator, currentValue) => accumulator + currentValue;
console.log(ages.reduce(totalAges));

//reduce2
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// expected output: 15
