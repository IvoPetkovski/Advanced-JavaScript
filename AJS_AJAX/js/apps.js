let getBtn = document.getElementById("btnGet");

btnGet.addEventListener('click', function(){
    console.log("Getting data from the StarWars api, please wait...")
    $.ajax({
        url: 'https://swapi.dev/api/films/',
        method: 'GET',
        success: function(response){
            console.log(response);
            let film = response;
            for (const film of films) {
                console.log(film.title);
            }
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