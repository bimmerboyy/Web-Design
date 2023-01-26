/*U JS napraviti kalsu Softver koja sluzi za prikaz podataka o softveru.Od atributa
 sadrzi naziv,verziju,autora,kratak opis i URL

adrese za dve slike softvera (apsolutne ili relativne putanje ).Od funkcija sadrzi:

*Funkciju koja postavlja sve atribute
*Funkicju koja generise prikaz kao na slici i dodaje ga HTML elementu ciji je ID dat u 
vidu parametra 


Za generisanje prikaza napraviti DIV element,a potom mu dodavati HTML elemente po potrebi tako 
da se dobije prikaz kao na slici.Tako dobijeni DIV element dodati navedenom HTML elementu
U WEB strani iz predhodne vezbe ucitati kalsu softver koja je data u vidu eksterne datoteke
i zatim pomocu JS dodati 5 programa (Softverskih paketa) -trebalo bi da se prikazu u delu za sadrzaj
jedan ispod drugog

*/

class Softver {
    constructor(naziv, verzija, autor, karatkOpis, URL) {
        this.naziv = naziv;
        this.verzija = verzija;
        this.autor = autor;
        this.karatkOpis = karatkOpis;
        this.URL = URL;
    }

}