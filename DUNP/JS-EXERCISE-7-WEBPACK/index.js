import { printStudent } from "./src/helper.js";
import Student from "./src/student"; //uzima studenta iz student.js
import "./src/stilovi.scss"

console.log("Hello from amin file!");

const s = new Student("Aldin", "Mekic");

s.addSubject(10);
s.addSubject(9);

document.write("Student ima prosek " + s.calcAvg());


//U main.js treba da ispiste neku poruku a u index html u konzoli je zaparvo poruka

printStudent(s);
printAvgOfStudent(s);