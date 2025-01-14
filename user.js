/**
 * Egy felhasználó adatait reprezentáló osztály.
 */
export class Felhasznlo {
  /**
   * Az alapértelmezett értékek beállítását végző konstruktor
   * @param {number} id
   * @param {string} name
   * @param {number} age
   */
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  /**
   * Osztályszintű (statikus) függvény.
   * Nem minden példány rendelkezik sajáttal,
   * hanem a teljes Felhasználó osztálynak van
   * egyetlen egy darab ilyen függvénye
   */
  static fromJSON(adat) {
    return new Felhasznlo(adat.id, adat.name, adat.age);
  }
}
