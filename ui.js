class UI {

static addFilmToUI (newFilm) {

    const films = document.querySelector("#films")


    console.log(newFilm);


    films.innerHTML +=
    `<tr>
        <td><img src="${newFilm.photo}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.name}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`
} 

static clearElements (input1, input2, input3){

    input1.value = "";
    input2.value = "";
    input3.value = "";

}

static Alert (message, type){

    const cardbody = document.querySelector(".card-body");

    const div = document.createElement("div");
    div.classList = `alert alert-${type}`;
    div.textContent = message;

    cardbody.appendChild (div);

    setTimeout(function() {
        div.remove();
    }, 2000);
}

static deleteAll(){
    const tbody = document.querySelector("#films");
    tbody.innerHTML = "";
}
}