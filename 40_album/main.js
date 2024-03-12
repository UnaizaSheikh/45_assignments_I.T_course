function make_album(artistName, albumTitle, songs) {
    return " ".concat(artistName, ", ").concat(albumTitle, ", ").concat(songs);
}
// create three albums
var artistName1 = make_album("Atif Aslam", "Coke Studio", 2019);
var artistName2 = make_album("Rahat Fateh Ali Khan", "Soulful Voice", 2019);
var artistName3 = make_album("Ali zafar", "Jhoom", 2011);
console.log(artistName1);
console.log(artistName2);
console.log(artistName3);
