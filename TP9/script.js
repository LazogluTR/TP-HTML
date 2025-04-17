// Exercice 1 : Info-bulles
const popup = document.getElementById("popup");
document.querySelectorAll(".mot").forEach(mot => {
  mot.addEventListener("mouseover", e => {
    popup.innerText = mot.dataset.def;
    popup.style.left = e.pageX + "px";
    popup.style.top = e.pageY + "px";
    popup.style.display = "block";
  });
  mot.addEventListener("mouseout", () => popup.style.display = "none");
});

// Exercice 2 : Formulaire
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let etudes = document.getElementById("etudes").value;
  let ligne = `<tr><td>${nom}</td><td>${prenom}</td><td>${etudes}</td></tr>`;
  document.getElementById("tableau").innerHTML += ligne;
});

// Exercice 3 : Compte à rebours
let fin = new Date("2025-06-01T00:00:00").getTime();
setInterval(() => {
  let mtn = new Date().getTime();
  let diff = fin - mtn;
  let j = Math.floor(diff / (1000 * 60 * 60 * 24));
  let h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let m = Math.floor((diff / (1000 * 60)) % 60);
  let s = Math.floor((diff / 1000) % 60);
  document.getElementById("chrono").innerText = `${j} j  ${h} h  ${m} m  ${s} s`;
}, 1000);

// Exercice 4 : Calendrier
function calendrier(jourDebut, mois, annee, taille, couleurHeader, couleurJours) {
    const nbJours = new Date(annee, mois, 0).getDate();
    const jours = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];
    const tailles = {
      petit: "12px",
      moyen: "16px",
      grand: "20px"
    };
  
    let html = `<table style="font-size:${tailles[taille]};">
      <caption style="font-weight:bold; padding:10px;">${new Date(annee, mois - 1).toLocaleString("fr-FR", { month: "long", year: "numeric" })}</caption>
      <tr style="background-color:${couleurHeader};">`;
  
    for (let j of jours) html += `<th>${j}</th>`;
    html += "</tr><tr>";
  
    for (let i = 1; i < jourDebut; i++) html += "<td></td>";
    for (let d = 1; d <= nbJours; d++) {
      html += `<td style="background-color:${couleurJours};">${d}</td>`;
      if ((d + jourDebut - 1) % 7 === 0) html += "</tr><tr>";
    }
    html += "</tr></table>";
  
    document.getElementById("calendrier").innerHTML = html;
  }
  
  document.getElementById("form-calendrier").addEventListener("submit", function(e) {
    e.preventDefault();
    const jour = parseInt(document.getElementById("jour").value);
    const mois = parseInt(document.getElementById("mois").value);
    const annee = parseInt(document.getElementById("annee").value);
    const taille = document.getElementById("taille").value;
    const couleurHeader = document.getElementById("couleurHeader").value;
    const couleurJours = document.getElementById("couleurJours").value;
  
    calendrier(jour, mois, annee, taille, couleurHeader, couleurJours);
  });
  
