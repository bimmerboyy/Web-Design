  /*
                                       Kreirati kalsu Student koja ima atribute ime,prezime,brojIndeksa,ocene
                                       metode:
                                       konstruktor sa argumrntima (i,p,bi)
                                       predstaviSe() - vraca prosek studenta
                                       */

  class Student {
      constructor(i, p, bi) {
          this.ime = i;
          this.prezime = p;
          this.brojIndeksa = bi;
          this.ocene = [];
      }
      predstaviSe() {
          console.log(`Moje ime je ${this.ime} ${this.prezime} i broj indeksa ${this.brojIndeksa}`);
      }
      prosek() {
              let s = 0;
              let duzina = this.ocene.length;
              for (let i = 0; i < duzina; i++) {
                  s += Number(ocene[i]);
              }
              return s / duzina;
          }
          //   prosek() {
          //       let s = 0;
          //       this.ocene.forEach(ocena => {
          //           s += Number(ocene[i]);
          //       })
          //       return s / duzina;
  }

  const student1 = new Student("Nikola", "Matkovic", 123456);
  const stringOcene = prompt("Unesite ocene studenta:");
  student1.ocene = stringOcene.split(" ");
  student1.predstaviSe();
  console.log(`Student ima prosek ${prosek()}`);