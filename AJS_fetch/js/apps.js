let getBtn = document.getElementById("btnGet"); 
let btnNext = document.getElementById("btnNext"); 
let btnPrevious = document.getElementById("btnPrevious"); 
let tbody = document.getElementById("tbody"); 

let pageNumber = 1;

getBtn.addEventListener('click', function(){
    console.log("Getting data from the StarWars api, please wait...")
    fetch('https://swapi.dev/api/starships/')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        let results = data.results;
        for (const result of results) {
            console.log(result.name);
        }
        generateTable(results);
    })
    .catch(error => {
        if(error == 404){
            console.log("Error 404. Not Found")

        }
        else{
            console.log("UPS! Something went wrong!");
        }
    })
});

btnNext.addEventListener('click', function(){
    if(pageNumber > 3){
        return;
    }
    console.log("Getting the next page, please wait...")
        fetch(`http://swapi.dev/api/starships/?page=${pageNumber + 1}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let results = data.results;
            for (const result of results) {
                console.log(result.name);
            }
            generateTable(results);
        })
        .catch(error => {
            if(error.toString().includes("TypeError")){
                console.log("Error 404. Not Found!")
            }
            else{
                console.log("UPS! Something went wrong!");
            }
        })
        pageNumber++;
})


btnPrevious.addEventListener('click', function(){
    if(pageNumber < 2){
        return;
    }
    console.log("Getting the next page, please wait...")
        fetch(`http://swapi.dev/api/starships/?page=${pageNumber - 1}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let results = data.results;
            for (const result of results) {
                console.log(result.name);
            }
            generateTable(results);
        })
        .catch(error => {
            if(error == 404){
                console.log("Error 404. Not Found")
            }
            else{
                console.log("UPS! Something went wrong!");
            }
        })
        pageNumber--;
})


function generateTable(data){
    tbody.innerHTML = "";
    for(let i = 0; i < data.length; i++){
        let name = data[i].name;
        table = $("tbody");
        table.append(`<tr>
            <td>${name}</td>
        </tr>`)
    }
}