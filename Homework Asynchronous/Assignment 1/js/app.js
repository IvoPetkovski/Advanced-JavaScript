

const getStarWars = (url) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {
                resolve(data);

            },
            error: function (error) {
                reject(error)
            }
        })
    })
}


const checkPeople = (data) => {
    let results = data.results;
    if (!results || typeof (results) != 'object') {
        throw new Error('Problem with the people!');
    }
    if (results.length === 0) {
        throw new Error('There are no people here!');
    }
}

const getPeopleStarWars = (response) => {
    let results = response.results;
    for (const result of results) {
        console.log(result.name);
    }
    return new Promise((resolve, reject) => {
        if (results === 0) {
            reject('There are no people here!');
        }
        else {
            setTimeout(() => {
                resolve(results)
            });
        }
    })
}



getStarWars('https://swapi.dev/api/people/')
    .then(data => {
        checkPeople(data);
        return getPeopleStarWars(data);
    })

