export function getJsonData(url) {
    return fetch(url)
    .then((resp) => {
        return resp.json()
        .then((data) => {
            //groupByContinents(data);
            findByName(data, 'India')
            // console.log(data)            
        }).catch((err) => {
            console.log(err)
        })
    });
}

// groyp by continenets
function groupByContinents(data) {
    let result = _.groupBy(data, 'continents');
    console.log(result);
}

// get unique languages


// get sorted by name

// find any country by name

function findByName(collection, name) {
    let result = _.find(collection, function(o) { return o.name.common === name});
    console.log(result);
}
// 