function simuliereVerzögerung(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addiereNachVerzoegerung(zahl1, zahl2, verzoegerung) {
    await simuliereVerzögerung(verzoegerung).then(() => console.log(zahl1 + zahl2));
}
addiereNachVerzoegerung(3,7,2000);