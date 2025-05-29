const form = document.querySelector("#film-form");
const nameInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const photoInput = document.querySelector("#url");
const table = document.querySelector(".table");
const dltAll= document.querySelector("#clear-films");



eventListeners ();

function eventListeners(){

    form.addEventListener("submit" , addFilm);
    table.addEventListener("click" , deleteFilm)
    dltAll.addEventListener("click" , dltAllFilm);
}

function addFilm(e) {
    const name = nameInput.value.trim();
    const director = directorInput.value.trim();
    const photo = photoInput.value.trim();

    const films = Storage.getItemFromStorage();
    const repeat = films.find(e => e.name === name && e.director === director);
    
    if(name === "" || director === "" || photo === "")
        {
            //error
            UI.Alert("Tüm alanlar doldurulmalıdır!" , "danger");
        }

    else if (repeat !== undefined) {

        UI.Alert("Aynı film zaten ekli." , "danger");
    }

    else{

        const newFilm = new Film(name, director, photo);
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.Alert("Film Eklendi" , "success");

    }

    UI.clearElements(nameInput, directorInput, photoInput);

    e.preventDefault();
}

function deleteFilm(e) {


    if (e.target.id === "delete-film"){
       const row = e.target.closest('tr');
       const filmName = row.children[1].textContent.trim();
       Storage.deleteItemFromStorage(filmName);
       row.remove();
       UI.Alert("Film Silindi!" , "warning");

    }

}

const filmlist = Storage.getItemFromStorage();

filmlist.forEach(e => UI.addFilmToUI(e));



function dltAllFilm(){

    if(confirm("Tüm filmleri silmek istediğine emin misin?")){
        UI.deleteAll();
        Storage.deleteAll();
        UI.Alert("Tüm filmler Silindi!","danger");
    }
    
}