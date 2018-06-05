// når brugeren trykker på menubotton:
// skift/toggel klassen "hidden" på nav.


$(window).on("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    $(".menubutton").on("click", trykPåMenubutton);


}

function trykPåMenubutton() {
    console.log("tryk på menubotton");
    $("nav").toggleClass("hidden");
    //skifter frem og tilbage mellem kryds og menu
    $(".menubutton").toggleClass("kryds");


}
