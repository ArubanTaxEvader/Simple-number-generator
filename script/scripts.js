function NOM(){
var randomnom = Math.floor(Math.random() * 100) + 1;
console.log(randomnom);

document.getElementById("nam").innerHTML = randomnom;
}
