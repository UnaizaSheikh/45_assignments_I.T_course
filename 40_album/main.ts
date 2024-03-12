// write function called make_album() object describing a music album
interface Album{
    artistName : string;
    albumTitile: string;
    songs: number;
}
function make_album(artistName : string, albumTitle : string, songs : number){
    return` ${artistName}, ${albumTitle}, ${songs}`
}

// create three albums
let artistName1 = make_album("Atif Aslam", "Coke Studio", 2019);
let artistName2 = make_album("Rahat Fateh Ali Khan", "Soulful Voice", 2019);
let artistName3 = make_album("Ali zafar", "Jhoom", 2011);

console.log(artistName1);
console.log(artistName2);
console.log(artistName3);