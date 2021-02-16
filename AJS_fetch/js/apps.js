let getBtn = document.getElementById("btnGet");

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

function generateTable(data){
    for(let i = 0; i < data.length; i++){
        let name = data[i].name;
        let table = $("tbody");
        table.append(`<tr>
            <td>${name}</td>
        </tr>`)
    }
}