let getBtn = document.getElementById("btnGet");

btnGet.addEventListener('click', function(){
    console.log("Getting data from the StarWars api, please wait...")
    $.ajax({
        url: 'https://swapi.dev/api/films/',
        method: 'GET',
        success: function(response){
            console.log(response);
            let results = response.results;
            for (const result of results) {
                console.log(result.title);
            }
            createTable(results);
        },
        error: function(error){
            if(error.status === 404){
                console.log("ERROR 404. Not Found");
            }
            else{
                console.log("UPS! Something went wrong!");
            }
        }

    });
});


function createTable(data){
    for(let i = 0; i < data.length; i++){
        let title = data[i].title;
        let table = $("tbody");
        table.append(`<tr>
            <td>${title}</td>
        </tr>`)
    }

}