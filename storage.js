class Storage{

static addFilmToStorage(newfilm){

    let films = this.getItemFromStorage();

    films.push(newfilm);

    localStorage.setItem("films" , JSON.stringify(films));
}

static getItemFromStorage(){

    let films;

    if (localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
        
    }


    return films;

}

static getFilmToUI (){

    let films= this.getItemFromStorage();


}

static deleteItemFromStorage (filmName){

    let films = this.getItemFromStorage();

    films = films.filter(film => film.name !== filmName);

    localStorage.setItem("films" , JSON.stringify(films));

}

static deleteAll(){

    localStorage.removeItem("films");
}

}