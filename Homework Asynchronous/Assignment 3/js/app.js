let fetchAPI = document.getElementById('fetchAPI');
let btnAscending = document.getElementById('btnAscending');
let btnDescending = document.getElementById('btnDescending');

$(document).ready(function(){
    checkBtnAvailable();
})

const checkUpPeople = (data) => {
    let results = data.results;
    if (!results || typeof (results) != 'object') {
        throw new Error('Problem with the people!');
    }
    if (results.length === 0) {
        throw new Error('There are no people here!');
    }
}

const getThePeople = (response) => {
    let results = response.results;
    return new Promise((resolve, reject) => {
        if (results.length === 0) {
            reject('There are no people here!');
        }
        else {
            setTimeout(() => {
                resolve(results)
            });
        }
    })
}

const showThePeople = (data) => {
    for (const result of data) {
        console.log(result.name);
    }
}


const url = 'https://swapi.dev/api/people/'
let names = [];

fetchAPI.addEventListener('click', async function () {
    if(names.length > 0){
        return; 
    }
    try {
        let res = await fetch(url);
        let response = await res.json();
        for (let i = 0; i < response.results.length; i++) {
            response.results[i].id = i + 1;
        }
        names = response.results;
        checkBtnAvailable()
        checkUpPeople(response);
        let mainPeople = await getThePeople(response);
        showThePeople(mainPeople);
        createTable(mainPeople);
        $('#fetchAPI').prop('disabled', true);
    }
    catch (error) {
        console.log(error);
    }
})


function createTable(data) {
    $("tbody").empty();
    for (let i = 0; i < data.length; i++) {
        let name = data[i].name;
        let table = $("tbody");
        table.append(`<tr>
            <td>${data[i].id}</td>
            <td>${name}</td>
        </tr>`)
    }

}


btnAscending.addEventListener('click', function () {
    names.sort(function (a, b) {
        return a.id - b.id;
    })
    createTable(names);
})

btnDescending.addEventListener('click', function () {
    names.sort(function (a, b) {
        return b.id - a.id;
    })
    createTable(names);
})

function checkBtnAvailable(){
    $('#btnAscending').prop('disabled', names.length === 0);
    $('#btnDescending').prop('disabled', names.length === 0);
}