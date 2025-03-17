// Exercice 1
let x = parseInt(prompt("Entrez la longueur du rectangle :"));
let y = parseInt(prompt("Entrez la largeur du rectangle :"));
let surface = x * y;
console.log("Surface du rectangle : " + surface);
alert("Surface du rectangle : " + surface);

// Exercice 2
if (confirm("Voulez-vous utiliser ces valeurs ?")) {
    console.log("Surface du rectangle : " + surface);
    alert("Surface du rectangle : " + surface);
} else {
    location.reload(); // Recharge la page pour redemander les valeurs
}

// Exercice 3
while (isNaN(x) || isNaN(y) || x <= 0 || y <= 0) {
    alert("Veuillez entrer des valeurs valides (chiffres positifs uniquement) !");
    x = parseInt(prompt("Entrez la longueur du rectangle :"));
    y = parseInt(prompt("Entrez la largeur du rectangle :"));
}
console.log("Surface du rectangle : " + surface);
alert("Surface du rectangle : " + surface);

// Exercice 4
document.write("<h2>Surface du rectangle : " + surface + "</h2>");

// Exercice 5
function rect(x, y) {
    return x * y;
}
document.write("<h2>Surface calculée par fonction : " + rect(x, y) + "</h2>");

// Exercice 6
function tableMultiplication(n) {
    let tableHTML = "<table border='1'><tr><th>Multiplication</th></tr>";
    for (let i = 1; i <= 10; i++) {
        tableHTML += "<tr><td>" + n + " x " + i + " = " + (n * i) + "</td></tr>";
    }
    tableHTML += "</table>";
    document.write(tableHTML);
}
let nombre = parseInt(prompt("Entrez un nombre pour la table de multiplication :"));
tableMultiplication(nombre);

// Exercice 7
let epaisseur = parseFloat(prompt("Entrez l'épaisseur de la dalle en cm (15-35) :"));
while (epaisseur < 15 || epaisseur > 35 || isNaN(epaisseur)) {
    epaisseur = parseFloat(prompt("Valeur invalide. Entrez l'épaisseur de la dalle en cm (15-35) :"));
}
let surfacePlancher = parseFloat(prompt("Entrez la surface de la dalle en m² :"));
while (surfacePlancher <= 0 || isNaN(surfacePlancher)) {
    surfacePlancher = parseFloat(prompt("Valeur invalide. Entrez la surface de la dalle en m² :"));
}
let volumeBeton = (epaisseur / 100) * surfacePlancher;
let tonnesCiment = (volumeBeton * 350) / 1000;
let nbCamions = Math.ceil(volumeBeton / 9);
let prixHT = volumeBeton * 91 + nbCamions * 140;
let prixTTC = prixHT * 1.2;
document.write(`
    <h2>Devis</h2>
    <p>Volume de béton : ${volumeBeton.toFixed(2)} m³</p>
    <p>Tonnes de ciment nécessaires : ${tonnesCiment.toFixed(2)} t</p>
    <p>Nombre de camions nécessaires : ${nbCamions}</p>
    <p>Prix HT : ${prixHT.toFixed(2)} €</p>
    <p>Prix TTC : ${prixTTC.toFixed(2)} €</p>
`);
