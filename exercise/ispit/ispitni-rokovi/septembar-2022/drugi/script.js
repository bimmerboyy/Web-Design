/*Javascript-u napraviti klasu Softver koja shizi za prikaz podataka o softveru. Od atributa
treba da sadrži naziv, kategoriju, verziju, autora, kratak opis i URL adrese za dve slike softvera
(apsolutne ili relativne putanje). Od funkcija sadrži:
⚫ Funkciju koja postavlja sve atribute . Funkciju koja generiše prikaz kao na slici i dodaje ga
HTML elementu čiji je ID dat u vidu parametra
Za generisanje prikaza napraviti DIV element, a potom mu dodavati HTML, clemente po potrebi, tako da se dobije prikaz
kao na slici. Tako dobijeni DIV element dodati navedenom
HTML elementu
U-Web strani iz prethodne vežbe učitati klasu Softver koja je
data u vidu eksterne datoteke, i zatim pomoću Javascripta
dodati 5 programa (softverskih paketa-trebalo bi da se
prikažu u delu za sadržaj, jedan ispod drugog

*/

class Softver {
    constructor(naziv, kategorija, verzija, autor, kratakOpis, URL1, URL2) {
        this.naziv = naziv;
        this.kategorija = kategorija;
        this.verzija = verzija;
        this.autor = autor;
        this.kratakOpis = kratakOpis;
        this.image = new Image();
        this.image.URL1 = URL1;
        this.image2 = new Image();
        this.image2.URL2 = URL2;
    }
    napraviSoftver() {
        let mainDiv = document.createElement("div");
        mainDiv.style.border = "1px solid black";
        mainDiv.style.width = "800px";
        let h1 = document.createElement("h1");
        h1.innerHTML = this.naziv;
        mainDiv.style.padding = "30px";
        mainDiv.appendChild(h1);
        let imageGrid = document.createElement("div");
        let imageDiv1 = document.createElement("div");
        let imageDiv2 = document.createElement("div");
        let picture1 = document.createElement("img");
        let picture2 = document.createElement("img");
        picture1.src = this.image.URL1;
        picture1.style.width = "300px";

        imageDiv1.appendChild(picture1);

        picture2.src = this.image2.URL2;
        picture2.style.width = "300px";
        imageDiv2.appendChild(picture2);
        imageGrid.appendChild(imageDiv1);
        imageGrid.appendChild(imageDiv2);
        imageGrid.style.display = "grid";
        imageGrid.style.gridTemplateColumns = "300px";
        imageGrid.style.rowGap = "50px";
        imageGrid.style.width = "300px";

        let podaci = document.createElement("div");
        let p1 = document.createElement("p");
        p1.innerHTML = `Naziv:${this.naziv} <br/> Kategorija:${this.kategorija} <br/> Verzija:${this.verzija}
         <br/> Autor:${this.autor} <br/>`;
        p1.style.lineHeight = "35px";
        podaci.appendChild(p1);
        podaci.style.width = "100%";
        podaci.style.paddingLeft = "30px";
        podaci.style.border = "1px dotted black";
        podaci.style.marginLeft = "50px";
        let displayFlexAll = document.createElement('div');
        displayFlexAll.style.display = 'flex';
        displayFlexAll.appendChild(imageGrid);
        displayFlexAll.appendChild(podaci);
        displayFlexAll.style.marginBottom = "30px";
        mainDiv.appendChild(displayFlexAll);
        let opis = document.createElement('div');
        opis.style.border = "1px solid black";
        opis.style.height = "100px";
        let p2 = document.createElement('p');
        p2.innerHTML = `Kratak Opis: ${this.kratakOpis}`;
        opis.appendChild(p2);
        mainDiv.appendChild(opis);






        document.body.appendChild(mainDiv);
    }
}

let softver1 = new Softver("BMW M3 E30", "Automobil", "E30", "BMW", "Najbolji klasik svih vremena,cena mu samo raste!", "../drugi/BMW-M3-E30-Redux.jpg", "../drugi/1-BMW-E30-M3-by-Redux.jpg");
softver1.napraviSoftver();