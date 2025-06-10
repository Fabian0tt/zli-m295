function verdoppeln(zahl, callback) {
    const doppelt = zahl * 2;
    const ergebnis = "Das doppelte von " + zahl + " ist " + doppelt + ".";
    callback(ergebnis);
}
verdoppeln(5, function (ergebnis){
    console.log(ergebnis)
});
