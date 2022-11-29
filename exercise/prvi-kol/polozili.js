class Student{
    constructor(ime,prezime,ocena){
        this.ime = ime;
        this.prezime = prezime;
        this.ocena = ocena;
    }
}

let tarik = new Student("Tarik","Kucevic",8);
let nikola = new Student("Nikola","Matkovic",9);
let mekic = new Student("Aldin","Mekic",10);
let ermin = new Student("Ermin","Paljevic",5);

let studenti  = [tarik,nikola,mekic,ermin];

let polozili = studenti.filter(student => student.ocena > 5);

console.log(polozili);