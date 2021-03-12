
const checkPeople = (data) => {
    let results = data.results;
    if (!results || typeof (results) != 'object') {
        throw new Error('Problem with the people!');
    }
    if (results.length === 0) {
        throw new Error('There are no people here!');
    }
}

const getPeople = (response) => {
    let results = response.results;
    return new Promise((resolve, reject) => {
        if (results.length === 0) {
            reject('There are no people here!');
        }
        else {
            setTimeout(() => {
                resolve(results)
            }, );
        }
    })
}

const showPeople = (data) => {
    for (const result of data) {
        console.log(result.name);
    }
}

const url = 'https://swapi.dev/api/people/'
async function showStarWarsNames() {
    try {
        let res = await fetch(url);
        let response = await res.json();
        checkPeople(response);
        let mainPeople = await getPeople(response);
        showPeople(mainPeople);
        createTable(mainPeople);
        createBoostrapCard(mainPeople);
    }
    catch(error){
        console.log(error);
    }
}

showStarWarsNames();

function createTable(data){
    $('tbody').empty();
    for(let i = 0; i < data.length; i++){
        let name = data[i].name;
        let table = $("tbody");
        table.append(`<tr>
            <td>${name}</td>
        </tr>`)
    }

}

function createBoostrapCard(data){
    $('#list-group').empty();
    for(let i = 0; i < data.length; i++){
        let name = data[i].name;
        let listGroup = $("#list-group");
        listGroup.append(`<li>${name}</li>`)
    }
}