import { Felhasznlo } from "./user.js";

/* feliratkozás */
document.addEventListener("DOMContentLoaded", adatokBetoltese);

/* az adatelérési "réteg" feladat az adatok megszerzése */
function adatokBetoltese() {
  /* http get kérés indítása adott url-re */
  fetch("adatok.json")
    /* ha megérkezett a válasz, akkor adatok kinyerése */
    .then((valasz) => valasz.json())
    /* ha ez megtörtént */
    .then((adatok) => adatokFeldolgozasa(adatok));
}

function adatokFeldolgozasa(jsonAdatok) {

  const lista = [];

  for (const aktualisAdat of jsonAdatok) {
    lista.push(Felhasznlo.fromJSON(aktualisAdat));
  }

  felhaszanlokMegjelenitese(lista);
}

/**
 * a megjelenítési "réteg" feladat az adatok megjelenítése
 * @param {Felhasznlo[]} felhasznalok 
 */
function felhaszanlokMegjelenitese(felhasznalok) {
  const tablazat = document.querySelector("tbody");

  /* ez a C# foreach megfelelője */
  for (const user of felhasznalok) {
    tablazat.innerHTML += `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
        </tr>`;
  }
}
