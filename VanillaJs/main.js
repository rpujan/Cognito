import { getJsonData } from './1-basic-fetch.js';
import { getUsers } from './data/users.js';
import { getEmployees } from './data/employees.js'
import { getUsers as userNames } from './data/names.js'
import { getCountries } from './data/countries.js'
// import user from './data/employees.json';
const url = 'https://restcountries.com/v3.1/all';
const url2 = 'https://api.publicapis.org/entries';

import { sumOfArray, findLargestElement } from './arr.js';
// getJsonData(dinosaurs);

// console.log(getUser)
// fetch('../data/users.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// let data = getUsers();
// let a = _.uniqBy(data, "favoriteFruit")
// console.log(a);

const data = getCountries();

// pick name and borders
let a = _.map(data, i => _.pick(i, 'name.common', 'borders'));

// landlocked countries
let b = _.filter(data, ['landlocked', true]);

// landlocked countries group ny continents
let c = _.groupBy(_.filter(data, ['landlocked', true]), 'continents');

// Countris without shared border
let d = _.map(data, (val, key) => {
    if(!_.has(val, 'borders')) {
        return val       
    }
});

let e = _.groupBy(d, 'continents');

let f = Object.keys(e);

let arr = [];
let g = _.map(data, (val,key) => {
    let obj = {};
    //console.log(val.name.common)
    obj["name"] = val.name.common;
    obj["continents"] = val.continents;
    // obj["flags"] = val.flags;
    obj["region"] = val.region;
    obj["subregion"] = val.subregion;
    obj["population"] = Intl.NumberFormat("en",{notation: "compact"}).format(val.population);
    obj["population2"] = val.population;
    obj["landlocked"] = val.landlocked;
    arr.push(obj)
})

// console.log(arr);

const arr1 = [1,2,3,4,5];
const total = sumOfArray(arr1);
const largest = findLargestElement(arr1);
console.log(largest);
